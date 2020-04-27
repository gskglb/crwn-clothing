import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/homepage.component'; 
import ShopPage from './pages/shop/shoppage.component'; 
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
