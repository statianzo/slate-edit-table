import expect from 'expect';

export default function(editor) {
  const {value} = editor;
  const blockStart = value.document.getDescendant('anchor');

  editor.moveToStartOfNode(blockStart);

  const result = editor.run(
    'onKeyDown',
    {
      key: 'Backspace',
      preventDefault() {},
      stopPropagation() {},
    }
  );

  expect(result).toBe(editor);

  return editor;
}
