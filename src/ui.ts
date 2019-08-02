document.getElementById('create').onclick = () => {
    const textbox = document.getElementById('format') as HTMLInputElement;
    parent.postMessage({ pluginMessage: { type: 'create-clock', format: textbox.value } }, '*')
}

document.getElementById('cancel').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
