import '../src/assets/scss/style.scss';
import { createBrowserHistory } from "history";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example'

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
