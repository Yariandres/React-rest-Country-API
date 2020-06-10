import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContext';

import AppNav from './components/Nav';
import Home from './components/Home';
import { Details } from './components/Details';



function App() {
  return (
    <ThemeContextProvider>

      <Router>
        <AppNav/>
        <Switch>
          <Route exact path={'/'} component={ Home } />
          <Route path={'/details/:name'} component={ Details } />
        </Switch>
      </Router>

    </ThemeContextProvider>
  );
}

export default App;
