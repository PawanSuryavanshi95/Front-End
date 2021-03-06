import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage'
import NavTop from './Components/Navbar';
import Footer from './Components/Footer';
import Job from './pages/JobPage';

import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
              <NavTop/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/jobs" component={Job}/>
              </Switch>   
              <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;
