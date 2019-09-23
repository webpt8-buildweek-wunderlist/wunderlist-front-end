import React from 'react';
import SignUp from './components/Sign_up';
import HomePage from './components/HomePage';
import Login from './components/Login';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <NavBar />
       <h1>Wunderlist</h1>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/signup' component={SignUp} />
      </header>
    </div>
  );
}

export default App;
