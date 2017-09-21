import React, { PureComponent } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

class ErrorMessage extends PureComponent {
  render() {
    return (
      <Jumbotron>
        <h1>{ I18n.t('shared.error.title') }</h1>
        <p>{ I18n.t('shared.error.message') }</p>

        <Button bsStyle = 'primary' href = '/'>
          { I18n.t('shared.error.goToHome') }
        </Button>
      </Jumbotron>
    );
  }
}

export default ErrorMessage;
