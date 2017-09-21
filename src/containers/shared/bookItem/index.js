import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Media, Button, Glyphicon } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import { truncate } from '../../../utils/string';

class BookItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favorite : false
    };

    this._onFavoritePress = this._onFavoritePress.bind(this);
  }

  render() {
    const { renderFavoriteButton, book } = this.props;

    return (
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

          {
            renderFavoriteButton ?
              <Button
                disabled = { this.state.favorite }
                bsStyle  = 'success'
                onClick  = { this._onFavoritePress(book) }
              >
                { I18n.t('search.favorite') } { this.state.favorite ? <Glyphicon glyph = 'ok'/> : null }
              </Button>
            : null
          }
        </Media.Body>
      </Media>
    );
  }

  _onFavoritePress(book) {
    return () => {
      this.setState({ favorite : true });
      this.props.onFavoritePress(book);
    }
  }

  _renderThumb(book) {
    if(!!book.imageLinks && !!book.imageLinks.thumbnail) {
      return <img src = { book.imageLinks.thumbnail } alt = { truncate(book.title, 20) }/>;
    }

    return null;
  }
}

BookItem.propTypes = {
  renderFavoriteButton : PropTypes.bool,
  book                 : PropTypes.object.isRequired,
  onFavoritePress      : PropTypes.func
};

BookItem.defaultProps = {
  renderFavoriteButton : true
};

export default BookItem;
