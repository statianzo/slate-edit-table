import expect from 'expect';

export default function(editor) {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  editor.moveToEndOfNode(cursorBlock);

  const result = editor.run('onKeyDown', {
    key: 'Enter',
    shiftKey: true,
    preventDefault() {},
    stopPropagation() {},
  });

  expect(result.value.startBlock.type).toBe('paragraph');

  return result;
}
