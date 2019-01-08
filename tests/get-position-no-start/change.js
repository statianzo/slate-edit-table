import expect from 'expect';
import {Value, Selection} from 'slate';

export default function(editor) {
    editor.insertTable();

    editor.setValue(Value.fromJSON({
      ...editor.value,
      selection: Selection.fromJSON({}),
    }));

    const position = editor.getPosition();
    
    expect(() => position.getWidth()).toThrow('Not in a table');
    expect(() => position.getHeight()).toThrow('Not in a table');
    expect(() => position.getRowIndex()).toThrow('Not in a table');
    expect(() => position.getColumnIndex()).toThrow('Not in a row');

    return editor;
}
