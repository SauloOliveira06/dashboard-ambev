import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import BuscaMip from './pages/BuscaMip/BuscaMip';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/busca-mip" component={BuscaMip} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
