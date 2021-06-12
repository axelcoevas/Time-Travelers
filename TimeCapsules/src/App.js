import React, { useEffect } from 'react';
import Header from './components/Header'
import Home from "./components/Home"
import Login from "./components//Login"
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase'
import { useSateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js';
import CrearCapsula from './components/CrearCapsula';

const promise = loadStripe('pk_test_51HPvReHXKGZTu1L0SwRw4WF61gMh0ve4jr07OYvzt91KcmWHwcgeuEwSJbFI3eeHU0yN84kwONnJsSQ3wbIEElwV007vtCLA0J');

function App() {
  const [{ }, dispatch] = useSateValue();

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
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/CrearCapsula">
            <CrearCapsula />
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
