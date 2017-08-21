import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import photos from './photos';

import './Photo.css';

export default class Photo extends Component {
  state = {
    path: null
  };
  componentDidMount() {
    this.setPath(this.props.match.params.fileName);
  }
  componentWillReceiveProps(newProps){
    if(this.props.match.params.fileName !== newProps.match.params.fileName){
      this.setPath(newProps.match.params.fileName);
    }
  }
  setPath(fileName) {
    this.setState({
      path: null
    });
    const path = `/img/photos/normal/${fileName}`;
    const img = new Image();
    img.onload = () => this.setState({
      path
    });
    img.onerror = () => this.setState({
      error: true
    });
    img.src = path;
  }
  render() {
    const {path} = this.state;
    const {url, params} = this.props.match;
    const {fileName} = params;
    const loader = path ? null : <i className="loader fa fa-circle-o-notch fa-spin" />;
    const style = {
      backgroundImage: `url(${path})`
    };

    const currentIndex = photos.indexOf(fileName);

    const nextIndex = currentIndex < photos.length - 2 ? currentIndex + 1 : 0;
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;

    const next = url.replace(fileName, photos[nextIndex]);
    const prev = url.replace(fileName, photos[prevIndex]);

    return <div className="Photo" style={style}>
      <Link className="close" to="/misc"><i className="fa fa-close" /></Link>
      <nav>
        <Link to={next} className="next"><i className="fa fa-chevron-right" /></Link>
        <Link to={prev} className="prev"><i className="fa fa-chevron-left" /></Link>
      </nav>
      {loader}
    </div>;
  }
}
