import React from 'react';
import {Router} from "./router";
import {MainMenu} from "./components/MainMenu";

function App() {
  return (
    <>
      <MainMenu />
      <Router />
    </>
  );
}

export default App;
