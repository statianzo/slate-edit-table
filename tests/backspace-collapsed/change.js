export default function(editor) {
  const {value} = editor;
  const blockStart = value.document.getDescendant('anchor');

  editor.moveToStartOfNode(blockStart);

  return editor.run('onKeyDown', {
    key: 'Backspace',
    preventDefault() {},
    stopPropagation() {},
  });
}
