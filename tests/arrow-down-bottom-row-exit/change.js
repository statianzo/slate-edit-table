import expect from 'expect';

export const pluginOptions = {
  edgeRowExitOnDirection: true
}

export default (editor) => {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  editor.moveToEndOfNode(cursorBlock);

  const result = editor.run('onKeyDown', {
    key: 'ArrowDown',
    preventDefault() {},
    stopPropagation() {},
  });

  expect(editor.value.startBlock.key).toEqual('dest');
  return result;
}
