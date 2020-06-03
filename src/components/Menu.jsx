import React from "react";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Ambev</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          
          <div className="info">
            <a href="#" className="d-block">
              MENU
            </a>
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
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboards
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard MIP</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard MIP 2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard MIP 3</p>
                  </a>
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
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Carteira 1
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Exemplo</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Exemplo</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Exemplo</p>
                  </a>
                </li>
              </ul>
            </li>
          
          </ul>
        </nav>
        
      </div>
      
    </aside>
  );
}
