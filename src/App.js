import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home/homepage.component'; 
import ShopPage from './pages/shop/shoppage.component'; 
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      setCurrentUser(userAuth)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
          })
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
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' render = {() => (
            this.props.currentUser ?
             <Redirect to='/' />
            :
             <SignInAndSignUp />
          )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser:  user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
