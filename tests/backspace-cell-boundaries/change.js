export default function(editor) {
  return editor.run('onKeyDown', {
    key: 'Backspace',
    preventDefault() {},
    stopPropagation() {},
  });
}
