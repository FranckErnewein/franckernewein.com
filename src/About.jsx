import React from 'react';
import TypeWriter from './TypeWriter.jsx';
import MailTo from './MailTo.jsx';
import Tel from './Tel.jsx';
import Ofuscate from './Ofuscate.jsx';

export default function About(){
  return <div className="About">
    <h2><TypeWriter text="About" timer={90} /></h2>
    <div className="row">
      <div className="columns six">
        <h3>Contact</h3>
        <Ofuscate>
          <address>
            <i className="fa fa-envelope-o" /> Email: <MailTo /><br />
            <i className="fa fa-phone" /> Phone: <Tel />
          </address>
        </Ofuscate>
        <br />
        <p>
          I'm based in the south of France, close to Montpellier,<br />
          near the beach <a title="View on Google Maps" href="https://www.google.fr/maps/place/Carnon-Plage,+34280+Mauguio/@43.5431504,3.9660868,15z/data=!3m1!4b1!4m5!3m4!1s0x12b6bb4323d2abcd:0x2f1cdecb734b927b!8m2!3d43.5431357!4d3.9748416">
            <i className="fa fa-map-marker" />
          </a>.
        </p>
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
              <i className="fa fa-linkedin-square" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/franck.ernewein">
              <i className="fa fa-facebook-square" /> Facebook
            </a>
          </li>
        </ul>
      </div>

      <div className="columns three">
        <h3>Source code</h3>
        <p>
          This website was designed with React, you can checkout the <a href="https://github.com/FranckErnewein/franckernewein.com">source code</a> on Github.
        </p>
      </div>
    </div>

  </div>;
}
