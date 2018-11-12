export default function(plugin, editor) {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  editor.moveToRangeOfNode(cursorBlock);

  return editor.removeTable();
}
