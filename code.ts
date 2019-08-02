import {format} from 'date-fns'

figma.showUI(__html__);

const font = {family: "Roboto", style: "Regular"};

figma.ui.onmessage = async msg => {

    if (msg.type === 'create-clock') {
        const node = figma.createText();
        await figma.loadFontAsync(font);
        node.fontName = font;
        node.characters = format(new Date(), msg.format);
        figma.currentPage.appendChild(node);
        figma.currentPage.selection = [node];
        figma.viewport.scrollAndZoomIntoView([node]);
    }

    figma.closePlugin();
};
