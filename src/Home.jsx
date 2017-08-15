import React from 'react';
import TypeWriter from './TypeWriter.jsx';

export default function Home(){
  return <div className="Home">
    <img src="/img/me.jpg" alt="Me" />
    <h2><TypeWriter timer={90} text="Hello" /></h2>
    <p>
      I'm software engineer, strong javascripter, web interface friendly.<br />
      I'm also a French entrepreneur, founder of <a href="https://www.tweetping.net/">tweetping.net</a><br />
      I'm 34 years old.<br />
      <br />
      I'm currently available for freelance missions.
    </p>
  </div>;
}
