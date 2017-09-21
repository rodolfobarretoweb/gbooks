import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';
import Routes from '../../configs/routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style.css';

class Main extends PureComponent {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href = "/">{ I18n.t('shared.applicationName') }</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>
            <NavItem href = "/">{ I18n.t('shared.nav.search') }</NavItem>
            <NavItem href = "/favorites">{ I18n.t('shared.nav.favorites') }</NavItem>
          </Nav>
        </Navbar>

        <Grid className = "contentContainer">
          <Routes/>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Main);
