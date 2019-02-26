/** @jsx hyperscript */
import hyperscript from '../hyperscript';

export default (
  <value>
    <document>
      <paragraph>Before Table</paragraph>
      <table>
        <table_row>
          <table_cell>
            <paragraph>Col 0, Row 0</paragraph>
          </table_cell>
          <table_cell>
            <paragraph>Col 1, Row 0</paragraph>
          </table_cell>
          <table_cell>
            <paragraph>Col 2, Row 0, Line 0</paragraph>
          </table_cell>
        </table_row>
        <table_row>
          <table_cell>
            <paragraph>Col 0, Row 1</paragraph>
          </table_cell>
          <table_cell>
            <paragraph>Col 1, Row 1</paragraph>
          </table_cell>
          <table_cell>
            <paragraph>Col 2, Row 1</paragraph>
          </table_cell>
        </table_row>
        <table_row>
          <table_cell>
            <paragraph>Col 0, Row 2</paragraph>
          </table_cell>
          <table_cell>
            <paragraph>
              <paragraph key="anchor">Col 1, Row 2, Line 1</paragraph>
              <paragraph>Col 1, Row 2, Line 1</paragraph>
            </paragraph>
          </table_cell>
          <table_cell>
            <paragraph>Col 2, Row 2</paragraph>
          </table_cell>
        </table_row>
      </table>
    </document>
  </value>
);
