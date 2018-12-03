// @flow
import type Options from '../options';

import TablePosition from './TablePosition';

/**
 * The position of the selection start block, in the current table
 */
function getPosition(
    opts: Options,
    editor,
): TablePosition {
    const {value} = editor;
    if (!value.selection.start || !value.selection.start.key) return new TablePosition();
    return TablePosition.create(opts, value.document, value.selection.start.key);
}

export default getPosition;
