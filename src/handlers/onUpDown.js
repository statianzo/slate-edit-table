// @flow
import { type Change } from 'slate';

import { TablePosition } from '../utils';
import { moveSelectionBy, moveSelectionOutOfTable } from '../changes';
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

    if (
        (pos.isFirstRow() && direction === -1) ||
        (pos.isLastRow() && direction === +1)
    ) {
      if (opts.edgeRowExitOnDirection) {
        return moveSelectionOutOfTable(opts, editor, direction);
      } else {
        // Let the default behavior move out of the table
        return next();
      }
    }

    if (direction === -1 && !pos.isTopOfCell()) {
        return next();
    }

    if (direction === +1 && !pos.isBottomOfCell()) {
        return next();
    }

    event.preventDefault();

    moveSelectionBy(opts, editor, 0, direction);

    return editor;
}

export default onUpDown;
