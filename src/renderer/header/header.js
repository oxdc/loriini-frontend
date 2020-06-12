
import React from 'react';

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem ,
  EuiFieldSearch,
  EuiButtonIcon
} from '@elastic/eui';

function AppHeader () {
  return (
    <EuiHeader position='fixed' style={{padding: '0 10px', '-webkit-app-region': 'drag'}}>
      <EuiHeaderSection grow={false} style={{'-webkit-app-region': 'no-drag'}}>
        <EuiHeaderSectionItem border='none'>
          <EuiHeaderLogo />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection grow={true} style={{'-webkit-app-region': 'no-drag'}}>
        <EuiHeaderSectionItem border='none' style={{width: '100%', margin: '0 10px'}}>
          <EuiFieldSearch fullWidth={true} compressed />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection grow={false} style={{'-webkit-app-region': 'no-drag'}}>
        <EuiHeaderSectionItem border='none'>
          <EuiButtonIcon iconType='apps' />
          <EuiButtonIcon iconType='expand' />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  )
}

export default AppHeader;
