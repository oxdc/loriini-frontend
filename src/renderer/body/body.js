import React from 'react';
import { EuiPage, EuiPageBody } from "@elastic/eui";
import './body.scss';

function AppBody() {
  return (
    <EuiPage id='app-body'>
      <EuiPageBody>
        <div id='app-message'>
        </div>
        <div id='app-page'>
        </div>
      </EuiPageBody>
    </EuiPage>
  );
}

export default AppBody;
