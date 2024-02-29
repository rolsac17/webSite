import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Terms from '../pages/Terms';
import SolicitudCreditos from '../pages/SolicitudCreditos';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/productos' component={Productos} />
      <Route exact path='/producto' component={Landing} />
      <Route exact path='/terminos' component={Terms} />
      <Route exact path='/solicitud' component={SolicitudCreditos} />
    </Switch>
  </BrowserRouter>
);

export default App;
