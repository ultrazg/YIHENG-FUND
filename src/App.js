import React from 'react';
import './App.css';

// 路由
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Index from './views/Index';
import About from './views/About';
import Chaoshi from './views/Chaoshi';
import Contactus from './views/Contactus';
import News from './views/news';
import Yhnews from './views/Yhnews';
import Risk from './views/Risk';
import Privacy from './views/Privacy';
import Complaint from './views/Complaint';
import User from './views/User';

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
          <Route path='/yhnews' component={Yhnews}/>
          <Route path='/risk' component={Risk}/>
          <Route path='/privacy' component={Privacy}/>
          <Route path='/complaint' component={Complaint}/>
          <Route path='/user' component={User}/>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
