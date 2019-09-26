import React from 'react';
import SignUp from './components/Sign_up';
import Login from './components/Login';
import './App.css';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// import TheMain from "./components/Main";
import Header from "./components/Header";
import CurrentDay from "./components/CurrentDay";
import Calendar from "./components/Calendar";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>Wunderlist</h1> */}
      <Switch>
       {/* <PrivateRoute path = "/user" component = {TheMain} /> */}
        <PrivateRoute exact path = "/user" component = {Header} />
        {/* <PrivateRoute exact path = "/user/" component = {NavBar} />
        <PrivateRoute exact path = "/user/" component = {Search} /> */}
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path ="/current_day" component = {CurrentDay} />
       {/* <Route exact path='/' component={HomePage} /> */}
       <Route exact path='/' component={Login} />
       <Route exact path='/signup' component={SignUp} />
      </Switch>
      </header>
    </div>
  );
}

export default App;