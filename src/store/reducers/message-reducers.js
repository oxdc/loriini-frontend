import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  DISMISS_MESSAGE,
  deleteMessage
} from '../actions/messages';
import { v4 as uuidv4 } from 'uuid';

export const DefaultIcons = {
  info: 'iInCircle',
  warning: 'bolt',
  error: 'alert',
  success: 'check'
}

export const DefaultColors = {
  info: 'primary',
  warning: 'warning',
  error: 'danger',
  success: 'success'
}

const initialState = []

export default function MessageReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = action.payload;
      message.id = uuidv4();
      message.icon = message.icon || DefaultIcons[message.level] || DefaultIcons.info
      message.color = message.color || DefaultColors[message.level] || DefaultColors.info
      message.isDismissed = false
      if (!message.actions) {
        message.actions = [
          {
            id: 1,
            name: 'dismiss',
            type: 'primary',
            action: () => deleteMessage(message.id),
            callback: () => {}
          }
        ]
      }
      return [
        ...state,
        message
      ];
    case DELETE_MESSAGE:
      return state.filter(item => item.id !== action.payload.id);
    case DISMISS_MESSAGE:
      return state.map(item => item.id === action.payload.id ? {...item, isDismissed: true} : item);
    default:
      return state;
  }
}
