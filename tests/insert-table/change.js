export default function(plugin, editor) {
    const { value } = editor;
    const cursorBlock = value.document.getDescendant('anchor');
    editor.moveToRangeOfNode(cursorBlock); // Cursor here: Before|After
    editor.moveForward(6);

    return plugin.commands.insertTable(editor);
}
