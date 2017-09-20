import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

class Load extends PureComponent {
  render() {
    if(this.props.show) {
      return <ProgressBar active now = { 100 }/>;
    }

    return null;
  }
}

Load.propTypes = {
  show : PropTypes.bool.isRequired
};

export default Load;
