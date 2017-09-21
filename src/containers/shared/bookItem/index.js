import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Media, Button, Glyphicon } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import { truncate } from '../../../utils/string';

import './style.css';

class BookItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favorite : false
    };

    this._onFavoritePress = this._onFavoritePress.bind(this);
  }

  render() {
    const { book } = this.props;

    return (
      <div className = 'book-item-container'>
        <Media>
          <Media.Left>
            { this._renderThumb(book.volumeInfo || {}) }
          </Media.Left>

          <Media.Body>
            <Media.Heading>
              { truncate(book.volumeInfo.title || '', 80) }
            </Media.Heading>

            <b className = "clearfix">{ truncate(book.volumeInfo.subtitle || '', 80) }</b>
            <p>{ truncate(book.volumeInfo.description || '', 300) }</p>

            <div className = "buttons-container">
              { this._renderButtons() }
            </div>
          </Media.Body>
        </Media>
      </div>
    );
  }

  _renderThumb(book) {
    if(!!book.imageLinks && !!book.imageLinks.thumbnail) {
      return <img src = { book.imageLinks.thumbnail } alt = { truncate(book.title, 20) }/>;
    }

    return null;
  }

  _renderButtons() {
    const { book, renderFavoriteButton, renderDetailsButton, onDetailsButtonPress } = this.props;
    const buttons = [];

    if(renderFavoriteButton) {
      buttons.push(
        <Button
          key      = { 1 }
          disabled = { this.state.favorite }
          bsStyle  = 'success'
          onClick  = { this._onFavoritePress(book) }
        >
          { I18n.t('shared.bookItem.favorite') } { this.state.favorite ? <Glyphicon glyph = 'ok'/> : null }
        </Button>
      );
    }

    if(renderDetailsButton) {
      buttons.push(
        <Button
          key     = { 2 }
          bsStyle = 'primary'
          onClick = { onDetailsButtonPress }
        >
          { I18n.t('shared.bookItem.viewDetails') }
        </Button>
      );
    }

    return buttons;
  }

  _onFavoritePress(book) {
    return () => {
      this.setState({ favorite : true });
      this.props.onFavoritePress(book);
    }
  }
}

BookItem.propTypes = {
  renderFavoriteButton : PropTypes.bool,
  renderDetailsButton  : PropTypes.bool,
  book                 : PropTypes.object.isRequired,
  onFavoritePress      : PropTypes.func,
  onDetailsButtonPress : PropTypes.func
};

BookItem.defaultProps = {
  renderFavoriteButton : true,
  renderDetailsButton  : true
};

export default BookItem;
