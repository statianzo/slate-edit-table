import expect from 'expect';

export const pluginOptions = {
  edgeRowExitOnDirection: true
}


export default (editor) => {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  editor.moveToEndOfNode(cursorBlock);
  const spy = expect.createSpy();
  const result = editor.run('onKeyDown', {
    key: 'ArrowDown',
    preventDefault: spy,
    stopPropagation() {},
  });

  // Should not change location and should not call preventDefault;
  expect(editor.value.startBlock.key).toEqual('anchor');
  expect(spy).toNotHaveBeenCalled();
  return result;
};
