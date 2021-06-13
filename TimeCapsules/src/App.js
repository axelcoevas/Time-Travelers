import React, { useEffect } from 'react';
import Header from './components/Header'
import Home from "./components/Home"
import Login from "./components//Login"
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase'
import { useSateValue } from './StateProvider'
import CrearCapsula from './components/CrearCapsula';
import RedSocialPerfil from './components/RedSocialPerfil';
import RedSocialWishList from './components/RedSocialWishList';
import RedSocial from './components/RedSocial';

function App() {
  // eslint-disable-next-line
  const [{ }, dispatch] = useSateValue();

  const handlePath = (path) => {
    return !auth ? "/Login" : path;
  }

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
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
        <Header />
        <Switch>

          <Route path={handlePath("/RedSocial")}>
            <RedSocial />
          </Route>
          <Route path={handlePath("/RedSocialWishList")}>
            <RedSocialWishList />
          </Route>
          <Route path={handlePath("/RedSoscialPerfil")}>
            <RedSocialPerfil />
          </Route>
          <Route path={handlePath("/CrearCapsula")}>
            <CrearCapsula />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
