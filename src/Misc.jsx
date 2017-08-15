import React from 'react';
import { Link, Route } from 'react-router-dom';
import TypeWriter from './TypeWriter.jsx';
import ProcessingSketch from './ProcessingSketch';
import {sketch} from './data';

import './Misc.css';

export default function Misc(props) {
  const {match: {url}} = props;

  const thumbs = sketch.map(id => {
    return <Link to={`${url}/processing/${id}`} key={id}>
      <img src={`/img/processing/m_${id}.png`} alt={id} />
    </Link>;
  });

  return <div className="Misc">
    <h2><TypeWriter timer={90} text="Miscellaneous" /></h2>
    <h3>Processing</h3>
    <p>During my free time, I like to play with <a href="http://www.processing.org">Processing</a>. Here are some sample sketches.</p>
    <div className="processing">
      {thumbs}
    </div>
    <Route path={`${url}/processing/:sketchId`} component={ProcessingSketch} />

  </div>;
}
