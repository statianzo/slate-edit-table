/** @jsx hyperscript */
import hyperscript from '../hyperscript';

export default (
    <state>
        <document>
            <paragraph>
                <text key="paragraph">Paragraph</text>
            </paragraph>
            <table>
                <table_row>
                    <table_cell>
                        <paragraph>
                            <text key="table11">Table 1</text>
                        </paragraph>
                    </table_cell>
                    <table_cell>
                        <paragraph>
                            <text key="table12">Table 1</text>
                        </paragraph>
                    </table_cell>
                </table_row>
            </table>
            <table>
                <table_row>
                    <table_cell>
                        <paragraph>
                            <text key="table2">Table 2</text>
                        </paragraph>
                    </table_cell>
                </table_row>
            </table>
        </document>
    </state>
);
