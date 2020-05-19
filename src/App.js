import React, { Fragment,useState,useEffect,useContext,useRef } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Axios from 'axios';
import Alert from './components/layout/Alert'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';

import GithubContex from './context/github/githubContext';



const App =()=> {
  
  const githubContext = useContext(GithubContex);

useEffect(() => {
  githubContext.getAllUsers();
  console.log("show on load")
}, [githubContext]);


  //   useEffect(() => {
  //   (async function gitData() {
  //     // const githubContext=useContext(GithubContex);
  //     // githubContext.getAllUsers();
  //   })();
  // }, []);
 
  
  
  return (
    <GithubState> 
      <AlertState>
    <Router>
      <div className='App'>
        <Navbar />
        <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/' render={props=>(
                <Fragment>
                  <Search /> 
                  <Users />
                </Fragment>
              )} />
              <Route exact path='/about' component={About}/>
              <Route 
              exact 
              path="/user/:login" 
              component={User}
                
              />
            
            </Switch>
        </div>
      </div>
   </Router>
   </AlertState>
    </GithubState>            
  );
  
}

export default App;
