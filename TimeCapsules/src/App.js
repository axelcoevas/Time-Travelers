import React, { useEffect } from 'react';
import Header from './components/Header'
import Home from "./components/Home"
import Login from "./components//Login"
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { db, auth } from './firebase'
import { useSateValue } from './StateProvider'
import CrearCapsula from './components/CrearCapsula';
import RedSocialPerfil from './components/RedSocialPerfil';
import RedSocialWishList from './components/RedSocialWishList';
import RedSocial from './components/RedSocial';
import MisCapsulas from './components/MisCapsulas';
import HeaderSocialMedia from './components/HeaderSocialMedia';
import CrearMiniCapsula from './components/CrearMiniCapsula';
import Tutorial from './components/Tutorial';

function App() {
  // eslint-disable-next-line
  const [{ }, dispatch] = useSateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is: ", authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        db.collection('users').doc(authUser.uid).get()
          .then((doc) => {
            dispatch({
              type: 'SET_USERDATA',
              userdata: doc.data()
            })
          })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/RedSocial">
            <HeaderSocialMedia />
            <RedSocial />
          </Route>
          <Route path="/CrearMiniCapsula">
            <HeaderSocialMedia />
            <CrearMiniCapsula />
          </Route>
          <Route path="/RedSocialWishList">
            <HeaderSocialMedia />
            <RedSocialWishList />
          </Route>
          <Route path="/RedSocialPerfil">
            <HeaderSocialMedia />
            <RedSocialPerfil />
          </Route>
          <Route path="/MisCapsulas">
            <Header />
            <MisCapsulas />
          </Route>
          <Route path="/RedSocial">
            <Header />
            <RedSocial />
          </Route>
          <Route path="/RedSocialWishList">
            <Header />
            <RedSocial />
          </Route>
          <Route path="/RedSocial">
            <Header />
            <RedSocial />
          </Route>
          <Route path="/RedSocialWishList">
            <Header />
            <RedSocialWishList />
          </Route>
          <Route path="/RedSocialPerfil">
            <Header />
            <RedSocialPerfil />
          </Route>
          <Route path="/Tutorial">
            <Header />
            <Tutorial />
          </Route>
          <Route path="/CrearCapsula">
            <Header />
            <CrearCapsula />
          </Route>
          <Route path="/Login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
