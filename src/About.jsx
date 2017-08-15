import React from 'react';
import TypeWriter from './TypeWriter.jsx';

export default function About(){
  const email = atob('ZnJhbmNrLmVybmV3ZWluQGdtYWlsLmNvbQ==');
  return <div className="About">
    <h2><TypeWriter text="About" timer={90} /></h2>
    <div className="row">
      <div className="columns three">
        <h3>Contact</h3>
        <address>
          Tel: +33 6 50 79 41 35 <br />
          <a href={'mailto:' + email}>{email}</a>
        </address>
      </div>
      <div className="columns three">
        <h3>Social</h3>
        <ul className="social-link">
          <li>
            <a href="https://twitter.com/franckernewein">
              <i className="fa fa-twitter-square" /> Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/franckernewein">
              <i className="fa fa-github" /> Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/franck-ernewein-ba881b99/">
              <i className="fa fa-linkedin-square" /> Linked in
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/franck.ernewein">
              <i className="fa fa-facebook-square" /> Facebook
            </a>
          </li>
        </ul>
      </div>

      <div className="columns six">
        <h3>Source code</h3>
        <p>
          This website was designed with React, you can checkout the source on <a href="https://github.com/FranckErnewein/franckernewein.com">github</a>.
        </p>
      </div>
    </div>

  </div>;
}
