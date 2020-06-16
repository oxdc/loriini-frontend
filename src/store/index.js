import { combineReducers } from 'redux';
import UIReducer from './reducers/ui-reducer';
import MessageReducer from './reducers/message-reducers';

export default combineReducers({
  ui: UIReducer,
  messages: MessageReducer
});
