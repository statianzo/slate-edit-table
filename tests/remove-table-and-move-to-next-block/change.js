import expect from 'expect';

export default function(plugin, editor) {
    const cursorBlock = editor.value.document.getDescendant('anchor');
    editor.moveToRangeOfNode(cursorBlock);

    editor.removeTable();
    expect(editor.value.startBlock.key).toEqual('anchor_after');
    expect(editor.value.selection.start.offset).toEqual(0);
    return editor;
}
