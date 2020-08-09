import React from 'react';
import './App.css';

// 路由
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar';

import Index from './views/Index';
import About from './views/About';
import Chaoshi from './views/Chaoshi';
import Contactus from './views/Contactus';
import News from './views/news';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route path='/' exact component={Index}/>
          <Route path='/about' component={About}/>
          <Route path='/chaoshi' component={Chaoshi}/>
          <Route path='/contactus' component={Contactus}/>
          <Route path='/news' component={News}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
