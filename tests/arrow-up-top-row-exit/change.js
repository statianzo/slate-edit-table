import expect from 'expect';

export const pluginOptions = {
  edgeRowExitOnDirection: true
}


export default (editor) => {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  editor.moveToEndOfNode(cursorBlock);
  const spy = expect.createSpy()
  const result = editor.run('onKeyDown', {
    key: 'ArrowUp',
    preventDefault: spy,
    stopPropagation() {},
  });

  expect(editor.value.startBlock.key).toEqual('dest');
  expect(spy).toHaveBeenCalled();
  return result;
};
