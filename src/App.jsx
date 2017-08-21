import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MainNavItem from './MainNavItem.jsx';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import About from './About.jsx';
import Misc from './Misc.jsx';

import './App.css';

class App extends Component {
  render() {
    const pages = {
      'Home': '/home',
      'Skills': '/skills',
      'Miscellaneous': '/misc',
      'About': '/about'
    };
    const menuItems = Object.keys(pages).map(label => {
      const url = pages[label];
      return <MainNavItem to={url} key={label} >{label}</MainNavItem>;
    });

    return <div className="App">
      <header>
        <div className="container">
          <h1><Link to="/">Franck Ernewein</Link></h1>
          <nav className="MainNav row">{menuItems}</nav>
        </div>
      </header>
      <div className="line"></div>
      <br />
      <section className="container">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/misc" component={Misc} />
        <Route path="/about" component={About} />
      </section>
    </div>;
  }
}

export default App;
