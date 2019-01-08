import expect from 'expect';

export default function(editor) {
  const cursorBlock = editor.value.document.getDescendant('anchor');
  editor.moveToRangeOfNode(cursorBlock);

  editor.run('onKeyDown', {
    key: 'Tab',
    shiftKey: true,
    preventDefault() {},
    stopPropagation() {},
  });

  const position = editor.getPosition();

  // First row (new one)
  expect(position.getRowIndex()).toEqual(0);
  // Last cell
  expect(position.getColumnIndex()).toEqual(2);

  return editor;
}
