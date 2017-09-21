import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset, reduxForm } from 'redux-form';
import { PageHeader, Grid, Row, Col, Well } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import { search } from '../../actions/api';
import { save as saveFavorite } from '../../actions/favorite';
import { getQueryString } from '../../utils/url';
import Load from '../../components/load';
import Form from './form';
import Item from '../shared/bookItem';
import validate from './validate';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showLoad : false
    };

    this._onSearch             = this._onSearch.bind(this);
    this._clearForm            = this._clearForm.bind(this);
    this._saveFavorite         = this._saveFavorite.bind(this);
    this._onDetailsButtonPress = this._onDetailsButtonPress.bind(this);
  }

  componentWillMount() {
    const { location } = this.props;

    if(location && location.search.length) {
      this._onSearch({ query : getQueryString(location, 'query') });
    }
  }

  render() {
    const { handleSubmit, valid, pristine } = this.props;

    return(
      <div>
        <PageHeader>{ I18n.t('search.title') }</PageHeader>

        <Grid>
          <Row>
            <Col xs = { 12 } sm = { 12 } md = { 5 } lg = { 4 }>
              <Form
                onSubmit    = { handleSubmit(this._onSearch) }
                onCleanForm = { this._clearForm }
                valid       = { valid }
                pristine    = { pristine }
              />
            </Col>

            <Col xs = { 12 } sm = { 12 } md = { 7 } lg = { 8 }>
              { this._renderList() }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  _renderList() {
    const { books } = this.props;

    if(this.state.showLoad) {
      return <Load/>;
    }

    if(!!books.totalItems) {
      return books.items.map((book, index) => {
        return (
          <Item
            key                  = { index }
            book                 = { book }
            onFavoritePress      = { this._saveFavorite }
            onDetailsButtonPress = { this._onDetailsButtonPress(book.id) }
          />
        );
      });
    } else {
      return <Well>{ I18n.t('search.noResults') }</Well>;
    }
  }

  _onSearch(terms) {
    this.props.history.push(`?query=${terms.query}`);

    this.setState({ showLoad : true });

    this.props.search(terms.query).then(() => {
      this.setState({ showLoad : false });
    }).catch((error) => {
      this.props.history.push('error-message');
    });
  }

  _saveFavorite(book) {
    try {
      this.props.saveFavorite(book.id, book);
    } catch(error) {}
  }

  _onDetailsButtonPress(id) {
    return () => {
      this.props.history.push(`details/${id}`);
    }
  }

  _clearForm() {
    this.props.dispatch(reset('search'));
  }
}

const mapStateToProps = state => {
  return {
    books : state.api
  }
};

export default connect(mapStateToProps, { search, saveFavorite })(
  reduxForm({ form : 'search', validate }
)(Search));
