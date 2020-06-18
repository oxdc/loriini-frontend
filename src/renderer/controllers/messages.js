export default function bindMessageLogger(store) {
  store.subscribe(() => {
    let state = store.getState();
    let messages = state.messages;
    console.log(messages);
  })
}
