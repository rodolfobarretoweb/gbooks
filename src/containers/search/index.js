import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset, reduxForm } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';
import { search } from '../../actions/search';
import Load from '../../components/load';
import Form from './components/form';
import Table from './components/table';
import validate from './validate';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showLoad : false
    };

    this._onSearch  = this._onSearch.bind(this);
    this._clearForm = this._clearForm.bind(this);
  }

  render() {
    const { handleSubmit, valid, pristine } = this.props;

    return(
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
            { this.state.showLoad ? <Load show/> : <Table data = { this.props.books }/> }
          </Col>
        </Row>
      </Grid>
    );
  }

  _onSearch(terms) {
    this.setState({ showLoad : true });

    this.props.search(terms.query).then(() => {
      this.setState({ showLoad : false });
    }).catch(() => {
      this.setState({ showLoad : false });
    });
  }

  _clearForm() {
    this.props.dispatch(reset('search'));
  }
}

const mapStateToProps = state => {
  return {
    books : state.search.list
  }
};

export default connect(mapStateToProps, { search })(
  reduxForm({ form : 'search', validate }
)(Search));
