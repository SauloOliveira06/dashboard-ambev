import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import ContentBuscaMip from './ContentBuscaMip';

export default function BuscaMip() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <div className="content-wrapper">
        <ContentBuscaMip />
      </div>
      <Footer />
    </div>
  );
}
