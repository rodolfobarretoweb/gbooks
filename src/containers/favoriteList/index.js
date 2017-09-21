import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import { getAll } from '../../actions/favorite';
import Item from '../shared/bookItem';

class FavoriteList extends PureComponent {
  componentWillMount() {
    this.props.getAll();
  }

  render() {
    return (
      <div>
        <PageHeader>{ I18n.t('favorite.title') }</PageHeader>
        { this._renderList() }
      </div>
    );
  }

  _renderList() {
    const { favorites } = this.props;

    if(favorites && favorites.length) {
      return favorites.map((book, index) => {
        return (
          <Item
            renderFavoriteButton = { false }
            renderDetailsButton  = { false }
            key                  = { index }
            book                 = { book }
          />
        );
      });
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    favorites : state.favorite
  }
};

export default connect(mapStateToProps, { getAll })(FavoriteList);
