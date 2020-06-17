import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BuscaMip from './pages/BuscaMip/BuscaMip';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/busca-mip" component={BuscaMip} />
      </Switch>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
