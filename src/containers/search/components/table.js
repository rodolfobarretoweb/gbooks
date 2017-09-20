import React, { PureComponent } from 'react';
import { Table as TableContainer, Well } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import { truncate } from '../../../utils/string';

class Table extends PureComponent {
  render() {
    if(this.props.data && this.props.data.totalItems > 0) {
      return (
        <TableContainer responsive>
          <thead>
            <tr>
              <th>{ I18n.t('search.fields.title') }</th>
              <th>{ I18n.t('search.fields.subtitle') }</th>
              <th>{ I18n.t('search.fields.description') }</th>
            </tr>
          </thead>

          <tbody>
            { this._renderRows() }
          </tbody>
        </TableContainer>
      );
    }

    return <Well>{ I18n.t('search.noResults') }</Well>;
  }

  _renderRows() {
    return this.props.data.items.map((item, index) => {
      return (
        <tr key = { index }>
          <td>{ truncate(item.volumeInfo.title || '', 80) }</td>
          <td>{ truncate(item.volumeInfo.subtitle || '', 80) }</td>
          <td>{ truncate(item.volumeInfo.description || '', 120) }</td>
        </tr>
      );
    });
  }
}

export default Table;
