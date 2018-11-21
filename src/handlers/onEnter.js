// @flow
import {type Change} from 'slate';

import type Options from '../options';
import {TablePosition} from '../utils';
import {insertRow} from '../changes';

/**
 * Insert a new row when pressing "Enter"
 */
function onEnter(event: *, editor: *, opts: Options, next: *): void | Change {
  event.preventDefault();
  const {selection, document} = editor.value;
  const pos = TablePosition.create(opts, document, selection.start.key);
  const isAtEdgeOfCell =
    selection.focus.isAtStartOfNode(pos.cell) ||
    selection.focus.isAtEndOfNode(pos.cell);

  if (!opts.insertRowOnEnter || !isAtEdgeOfCell) {
    return next();
  }

  if (event.shiftKey) {
    return editor.splitBlock().setBlocks({type: opts.typeContent, data: {}});
  }

  return insertRow(opts, editor);
}

export default onEnter;
