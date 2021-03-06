import React from "react";

export default function BarChart() {
  return (
    <div className="card">
      <div className="card-header border-0">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">Sales</h3>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex">
          <p className="d-flex flex-column">
            <span className="text-bold text-lg">R$ 99.999,00</span>
            <span>Análise</span>
          </p>
          <p className="ml-auto d-flex flex-column text-right">
            <span className="text-success">
              <i className="fas fa-arrow-up" /> 99.1%
            </span>
            <span className="text-muted">Desde ultimo mês</span>
          </p>
        </div>
        {/* /.d-flex */}
        <div className="position-relative mb-4">
          <canvas id="sales-chart" height={200} />
        </div>
        <div className="d-flex flex-row justify-content-end">
          <span className="mr-2">
            <i className="fas fa-square text-primary" /> Este ano
          </span>
          <span>
            <i className="fas fa-square text-gray" /> Ano passado
          </span>
        </div>
      </div>
    </div>
  );
}
