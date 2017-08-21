import React from 'react';
import { Link, Route } from 'react-router-dom';
import TypeWriter from './TypeWriter.jsx';
import ProcessingSketch from './ProcessingSketch';
import Photo from './Photo';
import { sketch } from './data';
import photos from './photos.json';

import './Misc.css';

export default function Misc(props) {
  const {match: {url}} = props;

  const sketchThumbs = sketch.map(id => {
    return <Link to={`${url}/processing/${id}`} key={id}>
      <img src={`/img/processing/m_${id}.png`} alt={id} />
    </Link>;
  });

  const photoThumbs = photos.map(fileName => {
    const style = {
      backgroundImage: `url(/img/photos/thumb/${fileName})`
    };
    return <Link to={`${url}/photos/${fileName}`} key={fileName} style={style} />;
  });

  return <div className="Misc">
    <h2><TypeWriter timer={90} text="Miscellaneous" /></h2>
    <h3>Photos</h3>
    <p>I like to take pictures from all around the world with my D60.</p>
    <div className="photos">
      {photoThumbs}
    </div>
    <div className="clr"></div>

    <h3>Aquarelles</h3>
    <p>
      When I want to leave screen, I recently started to paint with watercolours. Don't be rude, I'm still a newbie <span role="img" aria-label="smiling face with open mouth and cold sweat">😅</span>.
    </p>
    <div className="aquarelles">
      <div className="row">
        <div className="columns six">
          <img src="/img/aquarelle/1.jpg" alt="" />
        </div>
        <div className="columns six">
          <img src="/img/aquarelle/2.jpg" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="columns six">
          <img src="/img/aquarelle/3.jpg" alt="" />
        </div>
        <div className="columns six">
          <img src="/img/aquarelle/4.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="clr"></div>

    <h3>Processing</h3>
    <p>During my free time, I like to play with <a href="http://www.processing.org">Processing</a>. Here are some sketches I coded:</p>
    <div className="processing">
      {sketchThumbs}
    </div>
    <div className="clr"></div>

    <Route path={`${url}/processing/:sketchId`} component={ProcessingSketch} />
    <Route path={`${url}/photos/:fileName`} component={Photo} />

  </div>;
}
