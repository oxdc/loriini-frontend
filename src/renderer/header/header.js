
import React, { useState } from 'react';

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem ,
  EuiFieldSearch,
  EuiButtonIcon,
  EuiIcon
} from '@elastic/eui';
import './header.scss';
const remote = window.require('electron').remote;

function AppHeader () {
  const [windowStatus, setWindowStatus] = useState('minimize');
  const [pinned, setPinning] = useState(false);

  const win = remote.getCurrentWindow();

  const pin = () => {
    if (pinned) {
      win.setAlwaysOnTop(false, 'screen');
      setPinning(false);
    } else  {
      win.setAlwaysOnTop(true, 'screen');
      setPinning(true);
    }
  }

  const resize = () => {
    let bounds = win.getBounds();
    let height, width;
    if (windowStatus === 'minimize') {
      width = 450;
      height = 70;
      setWindowStatus('expand');
    } else {
      width = 450;
      height = 600;
      setWindowStatus('minimize');
    }
    bounds.height = height;
    bounds.width = width;
    win.setBounds(bounds, true);
  };

  return (
    <EuiHeader id='app-header'>
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
          <EuiFieldSearch
            fullWidth={true}
            compressed
            placeholder='search'
          />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border='none'>
          <EuiButtonIcon iconType='arrowDown' />
          <EuiButtonIcon iconType='arrowUp' />
          <EuiButtonIcon iconType={pinned ? 'pinFilled' : 'pin'} onClick={pin} />
          <EuiButtonIcon iconType={windowStatus} onClick={resize} />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}

export default AppHeader;
