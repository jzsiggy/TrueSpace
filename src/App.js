import React from 'react';
import Document from './components/document/Document';
import Home from './components/home/Home';

import { Route , Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/docs/:id" component={Document} />
    </Switch>
  );
}

export default App;
