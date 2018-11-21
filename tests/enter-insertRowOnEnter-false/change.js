import expect from 'expect';

export const pluginOptions = {
  insertRowOnEnter: false
};

export default function(editor) {
  const blockStart = editor.value.document.getDescendant('anchor');
  editor.moveToEndOfNode(blockStart);

  editor.run('onKeyDown', {
    key: 'Enter',
    preventDefault() {},
    stopPropagation() {},
  });

  expect(editor.value.startBlock.type).toBe('paragraph');

  return editor;
}
