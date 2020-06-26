import React from 'react';
import moneyFormatter from '../../utils/moneyFormat';

// import { Container } from './styles';

function Box({ mip }) {
  return (
    <>
      {mip !== null && (
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1">
                <i className="fas fa-money-check-alt" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Custo Total</span>
                <span className="info-box-number">
                  {moneyFormatter(mip.custoTotal.total)}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1">
                <i className="fas fa-funnel-dollar" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Efeito Preço</span>
                <span className="info-box-number">
                  {moneyFormatter(mip.efeitoPrecoTotal.total)}
                </span>
              </div>
            </div>
          </div>
          <div className="clearfix hidden-md-up" />
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1">
                <i className="fas fa-money-bill-alt" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Efeito Performance</span>
                <span className="info-box-number">
                  {moneyFormatter(mip.efeitoPerformaceTotal.total)}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1">
                <i className="fas fa-search-dollar" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Volume Total</span>
                <span className="info-box-number">2.000,00</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Box;
