import { WindowMode } from '../../store/actions/ui';

const remote = window.require('electron').remote;
const win = remote.getCurrentWindow();

export default function bind(store) {
  store.subscribe(() => {
    let state = store.getState();
    let uiState = state.uiReducer;
    let bounds = win.getBounds();
    switch (uiState.mainWindow.mode) {
      case WindowMode.MAXIMIZE:
        bounds.height = Math.max(uiState.mainWindow.size.height, 600);
        bounds.width = Math.max(uiState.mainWindow.size.width, 450);
        win.setBounds(bounds, true);
        break;
      case WindowMode.MINIMIZE:
        bounds.height = 70;
        bounds.width = Math.max(uiState.mainWindow.size.width, 450);
        win.setBounds(bounds, true);
        break;
      default:
    }
    if (uiState.mainWindow.pinned) {
      win.setAlwaysOnTop(true, 'screen');
    } else {
      win.setAlwaysOnTop(false, 'screen');
    }
  });
}
