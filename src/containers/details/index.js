import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  ListGroup,
  ListGroupItem,
  Image,
  Grid,
  Col,
  Row,
  PageHeader,
  Button,
  Panel
} from 'react-bootstrap';

import { I18n } from 'react-redux-i18n';
import { getById } from '../../actions/api';
import Load from '../../components/load';

class Details extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showLoad : true
    };
  }

  componentDidMount() {
    this.props.getById(this.props.match.params.id || 0).then(() => {
      this.setState({ showLoad : false });
    }).catch(() => {
      this.props.history.push('error-message');
    });
  }

  render() {
    const { book } = this.props;

    if(this.state.showLoad) {
      return <Load/>;
    }

    return(
      <div>
        <PageHeader>{ I18n.t('details.title') }</PageHeader>

        <Grid>
          <Row>
            <Col xs = { 12 } sm = { 12 } md = { 6 } lg = { 4 }>
              <Image src = { book.volumeInfo.imageLinks.medium } responsive/>
            </Col>

            <Col xs = { 12 } sm = { 12 } md = { 6 } lg = { 8 }>
              <Panel header = { book.volumeInfo.title }>
                <b>{ book.volumeInfo.subtitle }</b>
                <p>{ book.volumeInfo.description }</p>

                <ListGroup>
                  <ListGroupItem>
                    { I18n.t('details.author', { value : book.volumeInfo.authors.join(',') }) }
                  </ListGroupItem>

                  <ListGroupItem>
                    { I18n.t('details.pubListGroupItemsher', { value : book.volumeInfo.pubListGroupItemsher }) }
                  </ListGroupItem>

                  <ListGroupItem>
                    { I18n.t('details.pageCount', { value : book.volumeInfo.pageCount }) }
                  </ListGroupItem>
                </ListGroup>

                <Button bsStyle = "primary" href = { book.volumeInfo.infoLink}>
                  { I18n.t('details.buy') }
                </Button>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book : state.api
  }
};

export default connect(mapStateToProps, { getById })(Details);
