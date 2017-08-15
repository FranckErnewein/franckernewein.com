import React from 'react';

import './SkillBar.css';

export default function SkillBar(props) {
  const {value, label, maxValue=5, maxLabelLength=15} = props;
  const squares = new Array(maxValue).fill().map((_, i) => {
    const className = 'unit' + (i > (value - 1) ? ' empty' : '');
    return <div key={i} className={className}></div>;
  });
  const labelString = label + (new Array(maxLabelLength - label.length).fill('.').join(''));
  return <div className="SkillBar">
    <span className="label">{labelString}</span>
    <span className="units">{squares}</span>
  </div>;
}
