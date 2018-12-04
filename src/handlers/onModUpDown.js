// @flow
import { type Change } from 'slate';

import { TablePosition } from '../utils';
import { moveSelectionOutOfTable } from '../changes';
import type Options from '../options';

function onUpDown(
    event: *,
    editor: *,
    opts: Options,
    next: *
): void | Change {
    const { value } = editor;
    const direction = event.key === 'ArrowUp' ? -1 : +1;
    const pos = TablePosition.create(opts, value.document, value.selection.start.key);

    event.preventDefault();

    moveSelectionOutOfTable(opts, editor, direction);

    return editor;
}

export default onUpDown;
