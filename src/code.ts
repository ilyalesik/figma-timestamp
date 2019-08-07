import {format} from 'date-fns'

let timer = undefined;

if (figma.command === "add-new") {
    figma.showUI(__html__, {
        height: 156
    });

    const font = {family: "Roboto", style: "Regular"};

    figma.ui.onmessage = async msg => {

        if (msg.type === 'create-clock') {
            const node = figma.createText();
            await figma.loadFontAsync(font);
            node.fontName = font;
            node.characters = format(new Date(), msg.format);
            node.setPluginData("timestampFormat", msg.format);
            figma.currentPage.appendChild(node);
            figma.currentPage.selection = [node];
            figma.viewport.scrollAndZoomIntoView([node]);
        }

        figma.closePlugin();
    };
} else if (figma.command === "update-all") {
    const currentDate = new Date();
    searchFor((node) => !!node.getPluginData("timestampFormat"), results => results.forEach(async (node) => {
        if (node.fontName instanceof Object) {
            await figma.loadFontAsync(node.fontName);
            node.characters = format(currentDate, node.getPluginData("timestampFormat"));
        }
    }));

    figma.closePlugin();

    // This is a generator that recursively produces
    // all the nodes in subtree starting at the given node
    function* walkTree(node) {
        yield node;
        let children = node.children;
        if (children) {
            for (let child of children) {
                yield* walkTree(child)
            }
        }
    }

    function searchFor(predicat: (node: BaseNodeMixin) => boolean, handler: (results: Array<TextNode>) => any) {
        let walker = walkTree(figma.currentPage)

        function processOnce() {
            let results = [];
            let count = 0;
            let done = true;
            let res
            while (!(res = walker.next()).done) {
                let node = res.value
                if (predicat(node)) {
                    results.push(node);
                }
                if (++count === 1000) {
                    done = false
                    timer = setTimeout(processOnce, 20)
                    break
                }
            }

            handler(results);
        }

        processOnce()
    }
}


