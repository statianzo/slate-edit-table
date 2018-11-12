export default function(plugin, editor) {
  const {value} = editor;
  const blockStart = value.document.getDescendant('anchor');

  const withCursor = editor.moveToStartOfNode(blockStart);

  return editor.run(
    'onKeyDown',
    {
      key: 'Backspace',
      preventDefault() {},
      stopPropagation() {},
    },
    withCursor
  );
}
