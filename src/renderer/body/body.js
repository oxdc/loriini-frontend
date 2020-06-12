import React from 'react';
import { EuiPage, EuiPageBody, EuiPageContent } from "@elastic/eui";

function AppBody() {
  return (
    <EuiPage style={{position: 'fixed', top: 49, bottom: 2, left: 2, right: 2}}>
      <EuiPageBody>
        <EuiPageContent>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default AppBody;
