import React, { Component } from "react";
import BarChart from "./Charts/BarChart";
import Inline from "./Charts/Inline";
import TabelaMip from "./Tables/TabelaMip";
import api from '../api'

class Content extends Component {
  state = {
    mip: {},
    volumeSap: [],
    realSap: []
  };

  async componentDidMount() {
    const response = await api.get("");
    const data = response.data[0];
    const { volumeSap, realSap, ...mip } = data;
    
    this.setState({mip, volumeSap, realSap});
  }
  render() {

    const { mip } = this.state;
    console.log(mip);
    
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard MIP</h1>
                  <h5>Mês:</h5>
                </div>
                {/* /.col */}
                {/* <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard MIP</li>
                </ol>
              </div> */}
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Info boxes */}
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1">
                      <i className="fas fa-money-check-alt" />
                    </span>
                    <div className="info-box-content">
                    <span className="info-box-text">Custo Total</span>
                      {/* {custoTotal[0].realSap.map(sheet => (
                        <span className="info-box-number" key={sheet.id}>{sheet.total}</span>
                      ))} */}
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-danger elevation-1">
                      <i className="fas fa-funnel-dollar" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Efeito Preço</span>
                      <span className="info-box-number">R$/MIL 9.999,00</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
                {/* fix for small devices only */}
                <div className="clearfix hidden-md-up" />
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-success elevation-1">
                      <i className="fas fa-money-bill-alt"></i>
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Efeito Performance</span>
                      <span className="info-box-number">R$/MIL 99.99</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-warning elevation-1">
                      <i className="fas fa-search-dollar" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Volume Total</span>
                      <span className="info-box-number">2.000,00</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Análise de Custo</h5>
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <div className="btn-group">
                          {/* <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
                          <a href="#" className="dropdown-item">
                            Action
                          </a>
                          <a href="#" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#" className="dropdown-item">
                            Something else here
                          </a>
                          <a className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            Separated link
                          </a>
                        </div> */}
                        </div>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                          <p className="text-center">
                            <strong>Produzido: 1 Jan a 30 Jul, 2020</strong>
                          </p>
                          <div className="chart">
                            {/* Sales Chart Canvas */}
                            <canvas
                              id="salesChart"
                              height={180}
                              style={{ height: 180 }}
                            />
                          </div>
                          {/* /.chart-responsive */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-4">
                          <p className="text-center">
                            <strong>Produção</strong>
                          </p>
                          <div className="progress-group">
                            Volume
                            <span className="float-right">
                              <b>160</b>
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                          {/* /.progress-group */}
                          <div className="progress-group">
                            Hectolitro
                            <span className="float-right">
                              <b>310</b>
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-danger"
                                style={{ width: "5%" }}
                              />
                            </div>
                          </div>
                          {/* /.progress-group */}
                          <div className="progress-group">
                            <span className="progress-text">Exemplo</span>
                            <span className="float-right">
                              <b>480</b>
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                          {/* /.progress-group */}
                          <div className="progress-group">
                            Exemplo
                            <span className="float-right">
                              <b>250</b>
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </div>
                          {/* /.progress-group */}
                        </div>
                        {/* /.col */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* ./card-body */}
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-sm-3 col-6">
                          <div className="description-block border-right">
                            <span className="description-percentage text-success">
                              <i className="fas fa-caret-up" /> 17%
                            </span>
                            <h5 className="description-header">R$35.210,43</h5>
                            <span className="description-text">
                              TOTAL ORÇAMENTO
                            </span>
                          </div>
                          {/* /.description-block */}
                        </div>
                        {/* /.col */}
                        <div className="col-sm-3 col-6">
                          <div className="description-block border-right">
                            <span className="description-percentage text-danger">
                              <i className="fas fa-caret-down" /> 10%
                            </span>
                            <h5 className="description-header">10.390,90</h5>
                            <span className="description-text">
                              TOTAL QUANTIDADE
                            </span>
                          </div>
                          {/* /.description-block */}
                        </div>
                        {/* /.col */}
                        <div className="col-sm-3 col-6">
                          <div className="description-block border-right">
                            <span className="description-percentage text-warning">
                              <i className="fas fa-caret-left" /> 20%
                            </span>
                            <h5 className="description-header">24.813.53</h5>
                            <span className="description-text">
                              TOTAL VOLUME
                            </span>
                          </div>
                          {/* /.description-block */}
                        </div>
                        {/* /.col */}
                        <div className="col-sm-3 col-6">
                          <div className="description-block">
                            <span className="description-percentage text-success">
                              <i className="fas fa-caret-up" /> 18%
                            </span>
                            <h5 className="description-header">1200</h5>
                            <span className="description-text">
                              TOTAL HECTOLITRO
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Inline />
                </div>
                <div className="col-md-6">
                  <BarChart />
                </div>
              </div>
            </div>
          </section>
          <TabelaMip />
        </div>
      </div>
    );
  }
}

export default Content;