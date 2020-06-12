
import React from 'react';

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem ,
  EuiFieldSearch,
  EuiButtonIcon,
  EuiIcon
} from '@elastic/eui';

function AppHeader () {
  return (
    <EuiHeader style={{padding: '0 10px 0 0', 'box-shadow': 'none'}}>
      <EuiHeaderSection
        grow={false}
        style={{
          '-webkit-app-region': 'drag',
          width: '20px'
        }}
      >
        <EuiHeaderSectionItem border='none'>
          <EuiIcon type='boxesVertical'/>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border='none'>
          <EuiHeaderLogo />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection grow={true}>
        <EuiHeaderSectionItem
          border='none'
          style={{
            width: '100%',
            margin: '0 10px'
          }}
        >
          <EuiFieldSearch fullWidth={true} compressed />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border='none'>
          <EuiButtonIcon iconType='apps' />
          <EuiButtonIcon iconType='arrowDown' />
          <EuiButtonIcon iconType='arrowUp' />
          <EuiButtonIcon iconType='minimize' />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}

export default AppHeader;
