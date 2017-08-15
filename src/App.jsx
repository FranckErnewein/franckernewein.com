import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import About from './About.jsx';
import './App.css';

class App extends Component {
  render() {
    const pages = {
      'Home': '/home',
      'Skills': '/skills',
      //'Miscellaneous': '/misc',
      'About': '/about'
    };
    const menuItems = Object.keys(pages).map(label => {
      const url = pages[label];
      return <div key={label} className="columns three">
        <Link to={url}>{label}</Link>
      </div>;
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
        <Route path="/about" component={About} />
      </section>
    </div>;

  }
}

export default App;
