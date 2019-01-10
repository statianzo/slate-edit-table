/* @flow */
import {type Value, type Document} from 'slate';

import type Options from '../options';
import TablePosition from './TablePosition';

function getCopiedFragment(opts: Options, value: Value): ?Document {
  const {selection, document} = value;
  const startPosition = TablePosition.create(
    opts,
    document,
    selection.start.key
  );
  const endPosition = TablePosition.create(opts, document, selection.end.key);

  // Fragment as it would be copied by Slate
  const baseFragment = value.fragment;

  if (endPosition.cell === startPosition.cell) {
    // The selection is inside a single cell. Only copy the content of that cell
    const copiedCell = baseFragment
      .getAncestors(baseFragment.getFirstText().key)
      .findLast(n => n.type === opts.typeCell);

    return baseFragment.merge({
      nodes: copiedCell.nodes,
    });
  }
}

export default getCopiedFragment;
