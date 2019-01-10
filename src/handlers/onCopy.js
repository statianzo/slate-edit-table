// @flow

import type Options from '../options';
import {Editor, Value} from 'slate';
import getCopiedFragment from '../utils/getCopiedFragment';
import {cloneFragment} from 'slate-react';

function onCopy(opts: Options, event: *, editor: *, next: *): void | any {
  if (!editor.isSelectionInTable()) {
    return next();
  }

  const fragment = getCopiedFragment(opts, editor.value);

  if (!fragment) return next();

  const tempEditor = new Editor({
    value: Value.fromJSON({document: fragment}),
  });
  tempEditor.moveToRangeOfDocument();

  cloneFragment(event, tempEditor);
}

export default onCopy;
