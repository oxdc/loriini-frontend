import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import AppHeader from "./header/header";
import { EuiPage } from "@elastic/eui";

function App() {
  return (
    <EuiPage id='app'>
      <AppHeader />
    </EuiPage>
  );
}

export default App;
