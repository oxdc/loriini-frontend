import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import AppHeader from "./header/header";
import AppBody from "./body/body";

function App() {
  return (
    <div id='app'>
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
