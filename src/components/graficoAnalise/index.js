import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
// import { Container } from './styles';

import Upload from '../Upload/volume';
import api from '../../services/api';

function GraficoAnalise() {
  const [products, setProducts] = useState([]);
  const [dataGraphics, setDataGraphics] = useState({});
  const optionsBar = {
    title: {
      display: true,
      text: 'Quantitativo por categoria',
    },
    legend: {
      display: false,
      labels: {
        fontColor: '#000000',
        fontSize: 1,
      },
      maintainAspectRatio: true,
    },
    scales: { xAxes: [{ ticks: { autoSkip: true, padding: 5 } }] },
  };

  function generateDataGraphics(data) {
    const labelsBarChart = [];
    const dataBarChart = [];

    const { totalHectoLitroByProductDTOList } = data;

    Object.entries(totalHectoLitroByProductDTOList).forEach(([key, value]) => {
      labelsBarChart.push(key);
      dataBarChart.push(value.totalHectolitro);
    });

    setDataGraphics({
      labels: labelsBarChart,
      datasets: [
        {
          label: 'Total de Hectolitro por produto',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataBarChart,
        },
      ],
    });
  }

  async function getProducts() {
    const { data } = await api.get('/volume-sap/total-hectolitro-product');
    if (Object.keys(data).length > 0) {
      setProducts(data);
      generateDataGraphics(data);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Total de hectolitro por categoria</h5>
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
          <div className="card-body">
            {Object.keys(dataGraphics).length > 0 ? (
              <div className="row">
                <div className="col-md-12">
                  <p className="text-center">
                    {/* <strong>Produzido: 1 Jan a 30 Jul, 2020</strong> */}
                  </p>
                  <div className="chart">
                    <Bar
                      id="total-hectolitro-por-produto"
                      width={45}
                      height={10}
                      data={dataGraphics}
                      options={optionsBar}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <Upload callback={generateDataGraphics} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraficoAnalise;
