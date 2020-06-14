import {
  PIN_MAIN_WINDOW,
  UNPIN_MAIN_WINDOW,
  TOGGLE_MAIN_WINDOW,
  WindowMode
} from '../actions/ui'

const initialState = {
  mainWindow: {
    mode: WindowMode.MAXIMIZE,
    size: {
      height: 600,
      width: 400
    },
    position: {
      x: 200,
      y: 200
    },
    pinned: false
  }
}

export default function UIReducer (state=initialState, action) {
  switch (action.type) {
    case TOGGLE_MAIN_WINDOW:
      return {
        ...state,
        mainWindow: {
          ...state.mainWindow,
          mode: action.payload.mode,
          size: action.payload.size || state.mainWindow.size,
          position: action.payload.position || state.mainWindow.position,
        }
      };
    case PIN_MAIN_WINDOW:
      return {
        ...state,
        mainWindow: {
          ...state.mainWindow,
          pinned: true
        }
      }
    case UNPIN_MAIN_WINDOW:
      return {
        ...state,
        mainWindow: {
          ...state.mainWindow,
          pinned: false
        }
      }
    default:
      return state;
  }
}
