export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DISMISS_MESSAGE = 'DISMISS_MESSAGE';

export const addMessage = (message, level, icon = null, color = null, actions = null) => ({
  type: ADD_MESSAGE,
  payload: {
    message: message,
    level: level,
    icon: icon,
    color: color,
    actions: actions
  }
})

export const deleteMessage = messageId => ({
  type: DELETE_MESSAGE,
  payload: {
    id: messageId
  }
})

export const dismissMassage = messageId => ({
  type: DISMISS_MESSAGE,
  payload: {
    id: messageId
  }
})
