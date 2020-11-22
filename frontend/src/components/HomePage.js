import React, { Component } from "react";
import RoomJoin from './RoomJoin'
import CreateRoom from './CreateRoom'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'


export default class HomePage extends Component {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <Router>
            <Switch>
                <Route exact path='/'><p>This is the homepage</p></Route>                
                <Route path='/create' component={CreateRoom} />
                <Route path='/join' component={RoomJoin} />
            </Switch>
        </Router>
    );
    }
}