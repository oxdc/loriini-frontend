import React from 'react';
import { EuiPage, EuiPageBody } from "@elastic/eui";
import './body.scss';
import { connect } from 'react-redux';
import { WindowMode } from "../../store/actions/ui";

const AppBody = ({ show }) => {
  return (
    <div style={{display: show ? 'initial' : 'none'}}>
      <EuiPage id='app-body'>
        <EuiPageBody>
          <div id='app-message'>
          </div>
          <div id='app-page'>
          </div>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
}

const mapStateToProps = state => ({
  show: state.uiReducer.mainWindow.mode === WindowMode.MAXIMIZE
})

export default connect(mapStateToProps)(AppBody);
