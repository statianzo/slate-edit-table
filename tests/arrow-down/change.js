import expect from 'expect';

export default (editor) => {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  editor.moveToEndOfNode(cursorBlock);

  const result = editor.run('onKeyDown', {
    key: 'ArrowDown',
    preventDefault() {},
    stopPropagation() {},
  });

  expect(editor.value.startBlock.key).toEqual('destination');
  return result;
}
