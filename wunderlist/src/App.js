import React from 'react';
import SignUp from './components/Sign_up';
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
       <SignUp />
      </header>
    </div>
  );
}

export default App;
