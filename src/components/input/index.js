import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Input extends PureComponent {
  render() {
    const { label, type, input } = this.props;

    return (
      <FormGroup validationState = { this._getError() ? 'error' : null }>
        <ControlLabel>{ label }</ControlLabel>

        <FormControl { ...input }
          type = { type }
        />

        { this._getError() ? <HelpBlock>{ this._getError() }</HelpBlock> : null }
      </FormGroup>
    );
  }

  _getError() {
    if(this.props.meta && this.props.meta.error) {
      return this.props.meta.error;
    }

    return null;
  }
}

Input.propTypes = {
  label : PropTypes.string.isRequired,
  type  : PropTypes.string.isRequired
};

export default Input;
