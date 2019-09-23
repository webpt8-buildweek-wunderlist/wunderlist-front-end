import React from 'react';
import SignUp from './components/Sign_up';
import HomePage from './components/HomePage';
import Login from './components/Login';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Wunderlist</h1>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/signup' component={SignUp} />
      </header>
    </div>
  );
}

export default App;
