import React from 'react';
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example'
import DetailsPage from 'pages/DetailsPage'

import "assets/scss/style.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route path='/example' component={Example}></Route>
          <Route exact path='/properties/:id' component={DetailsPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
