import React, { PureComponent } from 'react';
import { I18n } from 'react-redux-i18n';
import { Field } from 'redux-form';
import { Form as FormContainer, Panel, Button } from 'react-bootstrap';
import Input from '../../../components/input';

class Form extends PureComponent {
  render() {
    return (
      <Panel header = { I18n.t('search.title') }>
        <FormContainer onSubmit = { this.props.onSubmit }>
          <Field
            component = { Input }
            name      = 'query'
            type      = 'search'
            label     = { I18n.t('search.fields.query') }
          />

          <Button block
            type     = 'submit'
            bsStyle  = 'primary'
            disabled = { !this.props.valid || this.props.pristine }
          >
            { I18n.t('search.fields.searchButton')}
          </Button>

          <Button block
            type    = 'reset'
            onClick = { this.props.onCleanForm }
          >
            { I18n.t('search.fields.cleanButton')}
          </Button>
        </FormContainer>
      </Panel>
    );
  }
}

export default Form;
