// @flow

import type Options from '../options';

import onEnter from './onEnter';
import onModEnter from './onModEnter';
import onTab from './onTab';
import onBackspace from './onBackspace';
import onUpDown from './onUpDown';
import onModUpDown from './onModUpDown';

const KEY_ENTER = 'Enter';
const KEY_TAB = 'Tab';
const KEY_BACKSPACE = 'Backspace';
const KEY_DOWN = 'ArrowDown';
const KEY_UP = 'ArrowUp';

/**
 * User is pressing a key in the editor
 */
function onKeyDown(
    opts: Options,
    event: *,
    editor: *,
    next: *
): void | any {
    // Only handle events in cells
    if (!editor.isSelectionInTable()) {
        return next();
    }

    // Build arguments list
    const args = [event, editor, opts, next];

    switch (event.key) {
        case KEY_ENTER:
            if (event.metaKey && opts.exitBlockType) {
                return onModEnter(...args);
            }
            return onEnter(...args);
        case KEY_TAB:
            return onTab(...args);
        case KEY_BACKSPACE:
            return onBackspace(...args);
        case KEY_DOWN:
        case KEY_UP:
          if (event.metaKey) {
            return onModUpDown(...args);
          }
          return onUpDown(...args);
        default:
            return next();
    }
}

export default onKeyDown;
