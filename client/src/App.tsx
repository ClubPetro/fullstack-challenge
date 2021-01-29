import React from 'react';

import { Header } from './components/Header';
import { Home } from './pages/Home';

import GlobalStyles from './styles/GlobalStyles';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
    </>
  );
}
