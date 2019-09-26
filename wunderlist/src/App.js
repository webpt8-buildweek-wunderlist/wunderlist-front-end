import React from 'react';
import SignUp from './components/Sign_up';
import Login from './components/Login';
import './App.css';
import {Route} from "react-router-dom";
// import {PrivateRoute} from "./components/PrivateRoute";
// import TheMain from "./components/Main";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";
import Search from "./components/Search";
import ToDoList from "./components/ToDoList"


function App() {
  return (
    <div className="App">
    {/* <ToDoList /> */}
      <header className="App-header">
       {/* <PrivateRoute path = "/user" component = {TheMain} /> */}
       <Route path = "/" component = {Header} />
        <Route path = "/" component = {NavBar} />
        <Route path = "/" component = {Search} />
        <Route  path='/calendar' component={Calendar} />
       
       <h1>Wunderlist</h1>
       {/* <Route exact path='/' component={HomePage} /> */}
       <Route exact path='/' component={Login} />
       <Route exact path='/signup' component={SignUp} />
       <Route path="/to_do_list" exact component={ToDoList} />
      </header>
    </div>
  );
}

export default App;
