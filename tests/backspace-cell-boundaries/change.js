export default function(plugin, editor) {
  return editor.run('onKeyDown', {
    key: 'Backspace',
    preventDefault() {},
    stopPropagation() {},
  });
}
