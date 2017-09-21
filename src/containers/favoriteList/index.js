import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../actions/favorite';
import Item from '../shared/bookItem';

class FavoriteList extends PureComponent {
  componentWillMount() {
    this.props.getAll();
  }

  render() {
    const { favorites } = this.props;

    if(favorites && favorites.length) {
      return <div>{ this._renderList(favorites) }</div>;
    }

    return null;
  }

  _renderList(favorites) {
    return favorites.map((book, index) => {
      return (
        <Item
          renderFavoriteButton = { false }
          key                  = { index }
          book                 = { book }
        />
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    favorites : state.favorite
  }
};

export default connect(mapStateToProps, { getAll })(FavoriteList);
