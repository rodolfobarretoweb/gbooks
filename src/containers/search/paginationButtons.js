import React, { PureComponent } from 'react';
import { Well, ButtonToolbar, Button } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

class PaginationButtons extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      startIndex : 0
    };

    this._onPreviousButtonPress = this._onPreviousButtonPress.bind(this);
    this._onNextButtonPress     = this._onNextButtonPress.bind(this);
  }

  render() {
    if(this.props.data && this.props.data.items) {
      return (
        <Well>
          <ButtonToolbar>
            { this._renderPreviousButton() }
            { this._renderNextButton() }
          </ButtonToolbar>
        </Well>
      );
    }

    return null;
  }

  _renderPreviousButton() {
    if(this.state.startIndex > 0) {
      return (
        <Button
          bsStyle = "primary"
          onClick = { this._onPreviousButtonPress }
        >
          { I18n.t('search.paginationButtons.previous') }
        </Button>
      );
    }

    return null;
  }

  _renderNextButton() {
    return (
      <Button
        bsStyle = "primary"
        onClick = { this._onNextButtonPress }
      >
        { I18n.t('search.paginationButtons.next') }
      </Button>
    );
  }

  _onPreviousButtonPress() {
    const startIndex = this.state.startIndex - 10;

    this.setState({ startIndex });
    this.props.onChange(startIndex);
  }

  _onNextButtonPress() {
    const startIndex = this.state.startIndex + 10;

    this.setState({ startIndex });
    this.props.onChange(startIndex);
  }
}

export default PaginationButtons;
