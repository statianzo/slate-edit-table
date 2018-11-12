import expect from 'expect';

export default function(plugin, editor) {
  const cursorBlock = editor.value.document.getDescendant('anchor');
  editor.moveToRangeOfNode(cursorBlock);

  const initialPosition = editor.getPosition();

  editor.run('onKeyDown', {
    key: 'Tab',
    preventDefault() {},
    stopPropagation() {},
  });

  const position = editor.getPosition();

  // Last row (new one)
  expect(position.getRowIndex()).toEqual(2);
  // First cell
  expect(position.getColumnIndex()).toEqual(0);

  return editor;
}
