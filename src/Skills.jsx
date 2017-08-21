import React from 'react';
import SkillBar from './SkillBar.jsx';
import TypeWriter from './TypeWriter.jsx';

export default function Skills(){
  return <div className="Skills">
    <h2><TypeWriter text="Skills" timer={90} /></h2>

    <div className="row">
      <div className="columns three">
        <h3>Web app</h3>
        <p>
          During 10 years, I built and collaborated on many differents types of webapps. Today, I'm using <a href="https://facebook.github.io/react/">React</a> a lot.
        </p>
      </div>

      <div className="columns three">
        <h3>Big Data &amp; Data viz</h3>
        <p>
          At <a href="https://www.tweetping.net/">Tweetping</a>, I developed a strong expertise in big data, specially in the way to represent data and make it comprehensive.
        </p>
      </div>

      <div className="columns three">
        <h3>Realtime</h3>
        <p>
          I'm very familiar with realtime interfaces and realtime protocols for webapp (as Webscokets or ServerEvent).
        </p>
      </div>

      <div className="columns three">
        <h3>Microservices</h3>
        <p>
          Nodejs, Redis, Docker... Are my favorite tools to create microservices architectures, to scale, and to manage processes.
        </p>
      </div>

    </div>
    <br />

    <div className="row">
      <div className="columns three">
        <h3>Languages</h3>
        <SkillBar value={5} label="Javascript" />
        <SkillBar value={5} label="HTML/CSS" />
        <SkillBar value={3} label="PHP" />
        <SkillBar value={3} label="Java" />
        <SkillBar value={2} label="C" />
      </div>

      <div className="columns three">
        <h3>Databases</h3>
        <SkillBar value={4} label="Redis" />
        <SkillBar value={4} label="Elasticsearch" />
        <SkillBar value={3} label="SQL" />
        <SkillBar value={4} label="CouchDB" />
        <SkillBar value={2} label="MongoDB" />
      </div>

      <div className="columns three">
        <h3>Others</h3>
        <SkillBar value={5} label="Nodejs" />
        <SkillBar value={5} label="React" />
        <SkillBar value={4} label="Docker" />
        <SkillBar value={4} label="HTTP" />
        <SkillBar value={4} label="Vim" />
      </div>
    </div>

  </div>;
}
