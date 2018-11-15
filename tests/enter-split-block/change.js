import expect from 'expect';

export default function(editor) {
  const blockStart = editor.value.document.getDescendant('anchor');
  editor.moveToEndOfNode(blockStart);

  const result = editor.run('onKeyDown', {
    key: 'Enter',
    preventDefault() {},
    stopPropagation() {},
  });

  expect(result.value.startBlock.type).toBe('paragraph');

  return result;
}
