// @flow

import type Options from '../options';
import { createCell } from '../utils';

/*
 * Ensure each row has the same number of columns.
 */
function normalizeNode(opts: Options) {
    const isRow = node => node.type === opts.typeRow;
    const isCell = node => node.type === opts.typeCell;
    const countNodes = row => row.nodes.size;

    return node => {
        if (node.type !== opts.typeTable) {
            return undefined;
        }

        const rows = node.nodes.filter(isRow);
        const maxColumns = Math.max(
            // Minimum 1 column
            1,
            rows.map(countNodes).max(),
        );
        const rowsMissingColumns = rows.filter(
            row => countNodes(row) < maxColumns,
        );

        if (rowsMissingColumns.isEmpty()) {
            return undefined;
        }

        return change => {
            change.withoutNormalizing(() => {
                rowsMissingColumns.forEach(row => {
                    const numberOfCellsToAdd = maxColumns - row.nodes.size;
                    const cells = Array.from({
                        length: numberOfCellsToAdd,
                    }).map(() => createCell(opts));
                    cells.forEach(cell =>
                        change.insertNodeByKey(row.key, row.nodes.size, cell),
                    );
                });
            });
        };
    };
}

export default normalizeNode;
