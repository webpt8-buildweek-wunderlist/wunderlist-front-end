import React from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import Calendar from "./Calendar";
import Search from "./Search";
import {Route} from "react-router-dom";

export default function TheMain (){

    return(
        <div>
            <Route path = "/user" component = {Header} />
            <Route path = "/user" component = {NavBar} />
            <Route path = "/user" component = {Search} />
            <Route  path='/calendar' component={Calendar} />
        </div>
    )
}