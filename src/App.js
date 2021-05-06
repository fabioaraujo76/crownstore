import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>Jackets page</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
      </Switch>
    </div>
  );
}


export default App;
