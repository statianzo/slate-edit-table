import expect from 'expect';

export default function(plugin, editor) {
  const res = editor.run('onKeyDown', {
    key: 'Backspace',
    preventDefault() {},
    stopPropagation() {},
  });

  return editor;
}
