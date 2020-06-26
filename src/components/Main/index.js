import React, { useState, useEffect } from 'react';
import BarChart from '../Charts/BarChart';
import Inline from '../Charts/Inline';

import api from '../../services/api';
import dateFormatter from '../../utils/dateFormat';

import Box from '../Box';
import GraficoAnalise from '../graficoAnalise';
import Loading from '../Loading';
import Upload from '../Upload';

export default function Content() {
  const [mip, setMip] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getMip() {
    setLoading(true);

    const response = await api.get('/mip');
    const { data } = response;

    setLoading(false);

    if (data) {
      setMip(data);
    }
  }

  useEffect(() => {
    getMip();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        {loading && <Loading loading />}
        {!loading && mip !== null ? (
          <>
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Dashboard MIP</h1>
                    <small>
                      Mês:
                      {mip !== null ? dateFormatter(mip.dataUploadedMip) : ''}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <section className="content">
              <div className="container-fluid">
                <Box mip={mip} />
                <GraficoAnalise mip={mip} />
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
          </>
        ) : (
          <Upload callback={setMip} />
        )}
      </div>
    </>
  );
}
