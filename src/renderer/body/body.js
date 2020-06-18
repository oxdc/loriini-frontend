import React from 'react';
import { EuiPage, EuiPageBody } from "@elastic/eui";
import './body.scss';
import { connect } from 'react-redux';
import { WindowMode } from '../../store/actions/ui';
import { Switch, Route } from 'react-router-dom';

const AppBody = ({ show }) => {
  return (
    <div style={{display: show ? 'initial' : 'none'}}>
      <EuiPage id='app-body'>
        <EuiPageBody>
          <div id='app-message'>
          </div>
          <div id='app-page'>
            <Switch>
              <Route path='/'>
              </Route>
            </Switch>
          </div>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
}

const mapStateToProps = state => ({
  show: state.ui.mainWindow.mode === WindowMode.MAXIMIZE
})

export default connect(mapStateToProps)(AppBody);
