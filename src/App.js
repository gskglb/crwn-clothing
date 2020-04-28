import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/homepage.component'; 
import ShopPage from './pages/shop/shoppage.component'; 
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth ,createUserProfileDocument } from './firebase/firebase.util';

import './App.css';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      this.setState({ currentUser : userAuth })
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state.currentUser))
          
        })
      }
    })

  }

  // This is necessary to close the open subsciption messaging channel between app and firebase to avoid any memory leaks
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
