import expect from 'expect';

export default function(plugin, editor) {
  const cursorBlock = editor.value.document.getDescendant('anchor');
  editor.moveToRangeOfNode(cursorBlock);
  editor.removeTable();

  const {value} = editor;
  expect(value.startBlock.type).toEqual('paragraph');
  expect(value.selection.start.offset)
      .toEqual(value.startBlock.text.length)
      .toEqual(0);
  return editor;
}
