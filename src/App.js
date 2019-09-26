import React from 'react';
import GlobalStyle from './style/global';

import Routes from './routes';
import Main from './pages/Main';

function App() {
  return (
      <>
        <Routes />
        <GlobalStyle />
    </>
  );
}

export default App;
