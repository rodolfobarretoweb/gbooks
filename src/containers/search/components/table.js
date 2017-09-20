import React, { PureComponent } from 'react';
import { Table as TableContainer, Well } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import { truncate } from '../../../utils/string';

class Table extends PureComponent {
  render() {
    if(this.props.data && this.props.data.totalItems > 0) {
      return (
        <TableContainer responsive striped hover>
          <thead>
            <tr>
              <th>{ I18n.t('search.fields.title') }</th>
              <th>{ I18n.t('search.fields.subtitle') }</th>
              <th>{ I18n.t('search.fields.description') }</th>
              <th></th>
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
          <td>{ truncate(item.volumeInfo.description || '', 500) }</td>
          <td>{ this._renderThumb(item.volumeInfo || {}) }</td>
        </tr>
      );
    });
  }

  _renderThumb(item) {
    if(!!item.imageLinks && !!item.imageLinks.thumbnail) {
      return <img src = { item.imageLinks.thumbnail } alt = { truncate(item.title, 20) }/>;
    }

    return null;
  }
}

export default Table;
