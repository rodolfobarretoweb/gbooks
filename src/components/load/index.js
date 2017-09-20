import React, { PureComponent } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Load extends PureComponent {
  render() {
    if(this.props.show) {
      return <ProgressBar active now = { 100 }/>;
    }

    return null;
  }
}

export default Load;
