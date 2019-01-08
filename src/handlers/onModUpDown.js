// @flow
import { type Change } from 'slate';

import { moveSelectionOutOfTable } from '../changes';
import type Options from '../options';

function onUpDown(
    event: *,
    editor: *,
    opts: Options,
): void | Change {
    const direction = event.key === 'ArrowUp' ? -1 : +1;

    event.preventDefault();

    moveSelectionOutOfTable(opts, editor, direction);

    return editor;
}

export default onUpDown;
