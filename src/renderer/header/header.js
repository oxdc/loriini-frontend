
import React from 'react';
import { connect } from "react-redux";
import { WindowMode, toggleMainWindowMode, pinMainWindow, unpinMainWindow } from "../../store/actions/ui";

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

const AppHeader = ({pinned, min, toggleMode, pin, unpin}) => {
  return (
    <EuiHeader id='app-header'>
      <EuiHeaderSection id='window-controller' grow={false}>
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
          <EuiButtonIcon
            iconType='arrowDown'
            aria-label='next dictionary / page bottom (double click)'
          />
          <EuiButtonIcon
            iconType='arrowUp'
            aria-label='previous dictionary / page top (double click)'
          />
          <EuiButtonIcon
            iconType={pinned ? 'pinFilled' : 'pin'}
            aria-label='pin or unpin the main window'
            onClick={() => pinned ? unpin() : pin()} />
          <EuiButtonIcon
            iconType={min ? 'expand' : 'minimize'}
            aria-label='expand or minimize the main window'
            onClick={() => toggleMode(min ? WindowMode.MAXIMIZE : WindowMode.MINIMIZE)}/>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}

const mapStateToProps = state => ({
  pinned: state.ui.mainWindow.pinned,
  min: state.ui.mainWindow.mode === WindowMode.MINIMIZE
})

const mapDispatchToProps = dispatch => ({
  toggleMode: (mode, size = null, location = null) => dispatch(toggleMainWindowMode(mode, size, location)),
  pin: () => dispatch(pinMainWindow()),
  unpin: () => dispatch(unpinMainWindow())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
