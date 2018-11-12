export default function(prevPlugin, editor) {
    const cursorBlock = editor.value.document.getDescendant('anchor');
    editor.moveToRangeOfNode(cursorBlock);

    return editor.removeTable();
}
