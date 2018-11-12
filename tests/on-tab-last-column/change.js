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

  // Next row
  expect(position.getRowIndex()).toEqual(initialPosition.getRowIndex() + 1);
  // Moved to first column
  expect(position.getColumnIndex()).toEqual(0);

  return editor;
}
