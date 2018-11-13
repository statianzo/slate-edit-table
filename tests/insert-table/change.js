export default function(editor) {
    const { value } = editor;
    const cursorBlock = value.document.getDescendant('anchor');
    editor.moveToRangeOfNode(cursorBlock); // Cursor here: Before|After
    editor.moveForward(6);

    return editor.insertTable();
}
