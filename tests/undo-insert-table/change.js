export default function(plugin, editor) {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  return editor
    .moveToRangeOfNode(cursorBlock)
    .moveForward(6)
    .insertTable()
    .undo();
}
