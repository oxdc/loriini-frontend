import React from 'react';
import { EuiCallOut, EuiButton } from '@elastic/eui';
import { connect } from 'react-redux';

const MessageBox = ({message, dispatch}) => (
    message ?
      <EuiCallOut
        title={message.title}
        color={message.color}
        iconType={message.icon}
      >
        <p>
          {message.message}
        </p>
        {
          message.actions.map(action => (
            <EuiButton
              key={action.id}
              color={action.type}
              size='s'
              onClick={() => {
                dispatch(action.action());
                action.callback()
              }}
            >
              {action.name}
            </EuiButton>
          ))
        }
      </EuiCallOut> :
      null
)

const mapStateToProps = state => ({
  message: state.messages[state.messages.length - 1]
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
