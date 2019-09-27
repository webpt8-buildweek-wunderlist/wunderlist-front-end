import React from "react";
import SignUp from "./components/Sign_up";
import Login from "./components/Login";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// import TheMain from "./components/Main";
import Header from "./components/Header";

import Description from "./components/tasks/taskList/Description";
import CurrentDay from "./components/CurrentDay";
import Calendar from "./components/Calendar";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch className ="switch_div" >
          
          <PrivateRoute exact path="/user" component={Header} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/current_day" component={CurrentDay} />
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/to_do_list" component={ToDoList} />
          <Route exact path="/to_do_list/:id" component={Description} />
          {/* <Route exact path="/to_do_list/:id" component={Description} /> */}
        </Switch>
      </header>
    </div>
  );
}

export default App;