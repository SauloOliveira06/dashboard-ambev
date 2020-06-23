import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Routes from './routes';

import history from './services/history';

export default function App() {
  return (
    <Router history={history}>
      <div className="wrapper">
        <Header />
        <GlobalStyle />
        <Menu />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}
