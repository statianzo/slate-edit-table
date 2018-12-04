// @flow

import { Record } from 'immutable';
import type { Node } from 'slate';

export type OptionsFormat = {
    typeTable?: string,
    typeRow?: string,
    typeCell?: string,
    typeContent?: string,
    exitBlockType?: string
};

/**
 * The plugin options
 */
class Options extends Record({
    typeTable: 'table',
    typeRow: 'table_row',
    typeCell: 'table_cell',
    typeContent: 'paragraph',
    exitBlockType: 'paragraph',
    insertRowOnEnter: true,
    edgeRowExitOnDirection: false,
}) {
    // Done as comments to prevent defining properties
    // https://github.com/babel/babel/issues/8417
    /*:: typeTable: string; */
    /*:: typeRow: string; */
    /*:: typeCell: string; */
    /*:: typeContent: string; */
    /*:: exitBlockType: string; */

    /*
     * Return a node filter to find a cell.
     */
    isCell = (node: Node): boolean =>
        node.object == 'block' && node.type == this.typeCell;
}

export default Options;
