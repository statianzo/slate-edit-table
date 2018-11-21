/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import expect from 'expect';
import fs from 'fs';
import path from 'path';
import {Editor, KeyUtils } from 'slate';
import hyperprint from 'slate-hyperprint';
import EditTable from '../src';

describe('slate-edit-table', () => {
    const tests = fs.readdirSync(__dirname);

    tests.forEach(test => {
        if (test[0] === '.' || path.extname(test).length > 0) return;

        it(test, () => {
            KeyUtils.resetGenerator();
            const dir = path.resolve(__dirname, test);
            const input = require(path.resolve(dir, 'input.js')).default;
            const expectedPath = path.resolve(dir, 'expected.js');
            const expected =
                fs.existsSync(expectedPath) && require(expectedPath).default;

            const {pluginOptions, default: runChange} = require(path.resolve(dir, 'change.js'));
            const editor = new Editor({
                plugins: [EditTable(pluginOptions)],
                value: input,
            });

            const newChange = runChange(editor);

            if (expected) {
                const newDoc = hyperprint(newChange.value.document, {
                    strict: true
                });
                expect(newDoc).toEqual(
                    hyperprint(expected.document, { strict: true })
                );

                // Check that the selection is still valid
                if (!newChange.value.document.nodes.isEmpty()) {
                    expect(newChange.value.startBlock).toExist(null);
                }
            }
        });
    });
});
