import React from 'react';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Home />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
