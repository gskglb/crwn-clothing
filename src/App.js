import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'; 
import './App.css';

const HatsPage = () => (
  <div>
    Hats Page
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
