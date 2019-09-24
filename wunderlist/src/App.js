import React from 'react';
import SignUp from './components/Sign_up';
import Login from './components/Login';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <NavBar />
       <h1>Wunderlist</h1>
       <Route exact path='/' component={Login} />
       <Route exact path='/signup' component={SignUp} />
       <Route exact path='/calendar' component={Calendar} />
      </header>
    </div>
  );
}

export default App;
