export const TOGGLE_MAIN_WINDOW = 'TOGGLE_MAIN_WINDOW';
export const PIN_MAIN_WINDOW = 'PIN_MAIN_WINDOW';
export const UNPIN_MAIN_WINDOW = 'UNPIN_MAIN_WINDOW';

export const WindowMode = {
  MAXIMIZE: 'MAXIMIZE',
  MINIMIZE: 'MINIMIZE'
}

export const toggleMainWindowMode = (mode, size = null, location = null) => ({
  type: TOGGLE_MAIN_WINDOW,
  payload: {
    mode: mode,
    size: size,
    location: location
  }
})

export const pinMainWindow = () => ({
  type: PIN_MAIN_WINDOW
})

export const unpinMainWindow = () => ({
  type: UNPIN_MAIN_WINDOW
})
