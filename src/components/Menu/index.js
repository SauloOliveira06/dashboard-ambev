import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE"
          className="brand-image img-circle elevation-3"
          style={{ opacity: '.8' }}
        />
        <span className="brand-text font-weight-light">Ambev</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <Link to="">MENU</Link>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview">
              <Link to="/#/" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboards
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/busca-mip" className="nav-link">
                    <i className="fas fa-caret-right nav-icon" />
                    <p>Busca MIP</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#/" className="nav-link">
                    <i className="fas fa-caret-right nav-icon" />
                    <p>Dashboard MIP 2</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#/" className="nav-link">
                    <i className="fas fa-caret-right nav-icon" />
                    <p>Dashboard MIP 3</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview ">
              <Link to="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Carteira
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-caret-right nav-icon" />
                    <p>Exemplo</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-caret-right nav-icon" />
                    <p>Exemplo</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#/" className="nav-link">
                    <i className="fas fa-caret-right nav-icon" />
                    <p>Exemplo</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
