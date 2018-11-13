import expect from 'expect';

export default function(editor) {
  const {value} = editor;
  const cursorBlock = value.document.getDescendant('anchor');
  return editor
    .moveToRangeOfNode(cursorBlock)
    .removeTable()
    .undo();
}
