import expect from 'expect';

export default function(plugin, editor) {
  const result = editor.run('onKeyDown', {
    key: 'Backspace',
    preventDefault() {},
    stopPropagation() {},
  });

  expect(result).toBe(undefined);

  return editor;
}
