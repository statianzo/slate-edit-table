import expect from 'expect';

export default function(plugin, editor) {
    const { value } = editor;
    const paragraph = value.document.getDescendant('paragraph');
    const table11 = value.document.getDescendant('table11');
    const table12 = value.document.getDescendant('table12');
    const cellText = value.document.getDescendant('cellText');
    const table2 = value.document.getDescendant('table2');

    editor.moveToStartOfNode(paragraph);
    expect(editor.isSelectionInTable()).toBe(false);

    editor.moveToStartOfNode(cellText);
    expect(editor.isSelectionInTable()).toBe(true);

    editor.moveToStartOfNode(table11);
    expect(editor.isSelectionInTable()).toBe(true);

    editor.moveFocusToEndOfNode(table12);
    expect(editor.isSelectionInTable()).toBe(true);

    editor.moveFocusToEndOfNode(table2);
    expect(editor.isSelectionInTable()).toBe(false);
}
