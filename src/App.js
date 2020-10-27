 
import React  from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/Home";
import Task from "./components/pages/Task";
import User from "./components/pages/User";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router,Route, Switch  } from "react-router-dom";
import AddTask from "./components/tasks/AddTask";
import  ChangePassword from "./components/users/ChangePassword";
import Logout from "./components/users/Logout";


function App() {
  return (
     <Router>
      <div className="App">
      <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Task" component={Task} />
        <Route exact path="/User" component={User} />
        <Route exact path="/tasks/add/" component={AddTask } />
        <Route exact path="/users/ChangePassword/" component={ChangePassword } />
        <Route exact path="/users/Logout" component={Logout} />

        

        </Switch> 
        </div>
        </Router>
      

     
  );
}

export default App;
