import React from 'react';

// import { Container } from './styles';

function graficoAnalise({ mip }) {
  return (
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
                      style={{ width: '80%' }}
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
                      style={{ width: '5%' }}
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
                      style={{ width: '60%' }}
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
                      style={{ width: '100%' }}
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
                  <span className="description-text">TOTAL ORÇAMENTO</span>
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
                  <span className="description-text">TOTAL QUANTIDADE</span>
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
                  <span className="description-text">TOTAL VOLUME</span>
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
                  <span className="description-text">TOTAL HECTOLITRO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default graficoAnalise;
