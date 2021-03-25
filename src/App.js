import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IYnr4EoWQd9C1mnSL0L5ivwMPIvyjoKJCIQJeIzKIoIEC0wEKHmUfF6X5J7hdji2I370HwG0z3JyL9FPHR5u2IG00naDBkD3h'
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {

        auth.onAuthStateChanged(authUser => {
        console.log('USER IS >>> ', authUser);

        if (authUser) {
          // the user just logged in / the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }
        else {
          // the user is logged out

          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
        
      })

  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>

        <Route path="/payment">
            <Header/>
            <Elements stripe={promise}> 
               <Payment/>
            </Elements>
          </Route> 

        <Route path="/login"> 
            <Login/>
          </Route> 

        <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route> 

          <Route path="/">
            <Header/>
            <Home/>
          </Route> 
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
