import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer">
      <strong>
        Copyright © 2020 <Link to="/"> Arckhtec</Link>
      </strong>

      <div className="float-right d-none d-sm-inline-block">
        <b>Versão</b> 1.0.0
      </div>
    </footer>
  );
}
