import React from 'react';
// import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/navbar.js'
import Dashboard from'./components/dashboard/dashboard'
import ProjectDetails from './components/projects/createProjectDetails'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import Weather from'./components/Weather/weatherPageEx'
import CreateProject from './components/projects/createProject'

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar/>
        <Switch>
        	<Route exact path='/' component ={Dashboard}/>
        	<Route path ='/project/:id' component ={ProjectDetails} />
        	<Route path ='/signin' component ={SignIn} />
        	<Route path ='/signup' component ={SignUp} />
          <Route path ='/weather' component ={Weather} />
          <Route path ='/create' component ={CreateProject} />

        </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;
