import React from 'react';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import TopBlogs from './components/pages/topBlogs';
import Projects from './components/pages/projects';
import About from './components/pages/about';
import Login from './components/pages/login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/topBlogs' component={TopBlogs}/>
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
