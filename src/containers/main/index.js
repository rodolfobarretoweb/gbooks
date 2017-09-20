import React, { PureComponent } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Grid } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import Routes from '../../configs/routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style.css';

class Main extends PureComponent {
  render() {
    return (
      <div>
        <Navbar fixedTop staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to = "/">{ I18n.t('shared.applicationName') }</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid className = "contentContainer">
          <Routes/>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Main);
