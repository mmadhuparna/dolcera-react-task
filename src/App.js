import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/shared/Header';
import Footer from './components/shared/Footer'

import PostList from './components/userpost/PostList';
import UserList from './components/userpost/UserList';

class App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col">
            <Header/>
            </div>
            </div>
          <div className="container ">
          <div className="row">
          <div className="col col-md-8 offset-md-2 shadow userlist">
          
            <Switch>
            <Route path = "/" exact = {true} render = { () => <Redirect to = "users"/> } />{/*to make 'users' the default page*/}
              <Route path="/posts/:id" component = {PostList}/>
              <Route path = "/users" component = {UserList}/>
             
            </Switch>
            
            </div>
            </div>
            </div>
  
          <div className="row">
          <div className="col">
            <Footer/>
            </div>
            </div>
        
            </div>
    );
  
  }
  }
  

export default App;
