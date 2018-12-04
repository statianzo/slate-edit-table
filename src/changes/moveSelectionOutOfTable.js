// @flow
import { type Editor, Node } from 'slate';

import { TablePosition } from '../utils';
import type Options from '../options';

/**
 * Move selection by a {x,y} relative movement
 */
function moveSelectionOutOfTable(
    opts: Options,
    editor: Editor,
    direction: number = 1 // Move down: +1, up: -1
): Editor {
    const { value } = editor;
    const { selection, document } = value;
    const pos = TablePosition.create(opts, document, selection.start.key);
    
    if (!pos.isInCell()) {
        throw new Error('moveSelectionOutOfTable can only be applied in a cell');
    }

    const table = pos.table;

    const isGoingUp = direction < 0;

    if (isGoingUp) {
        const previousNode = document.getPreviousBlock(table.key);
        previousNode && editor.moveToEndOfNode(previousNode);
    } else {
        const nextNode = document.getNextBlock(table.key);
        nextNode && editor.moveToStartOfNode(nextNode);
    }

    return editor;
}

export default moveSelectionOutOfTable;
