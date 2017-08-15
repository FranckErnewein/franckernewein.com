import React from 'react';
import TypeWriter from './TypeWriter.jsx';

import './Sample.css';

export default function Sample() {
  return <div className="Sample">
    <TypeWriter timer={40} text="Sample type writer text." />
    <br />
    <TypeWriter timer={40} text="Lorem Ipsum dolor..." />
    <br />
    <TypeWriter timer={40} text="And another one!" />
  </div>;
}
