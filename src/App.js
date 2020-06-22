import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}
