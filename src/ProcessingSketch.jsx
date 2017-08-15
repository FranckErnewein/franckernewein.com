import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import { sketch } from './data';

import './ProcessingSketch.css';

const navHeight = 60;

export default class ProcessingSketch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.copyWindowSizeToState = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
  }


  componentDidMount() {
    this.loadSketch(this.getSketchId());
    window.addEventListener('resize', this.copyWindowSizeToState);
  }
  componentWillReceiveProps(newProps) {
    if (this.getSketchId() !== this.getSketchId(newProps)) {
      this.loadSketch(this.getSketchId(newProps));
    }
  }
  componentDidUpdate() {
    this.initSketch();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.copyWindowSizeToState);
  }

  initSketch() {
    const {Processing} = window;
    if (this.proc) {
      this.proc.exit();
    }
    const {width, height} = this.state;
    const pde = this.pde.replace('size(1024, 768)', `size(${width}, ${height - navHeight})`);
    this.proc = new Processing(this.refs.canvas, pde);
  }

  loadSketch(id) {
    fetch(`/pde/${id}.pde`).then(response => response.text()).then((pde) => {
      this.pde = pde;
      this.initSketch();
    });
  }

  getSketchId(props) {
    return (props || this.props).match.params.sketchId;
  }

  render() {
    const {match: {url}} = this.props;
    const {width, height} = this.state;
    const currentId = this.getSketchId();
    const contentStyle = {
      width,
      height
    };
    const canvasStyle = {
      top: navHeight,
      width,
      height: height - navHeight
    };
    const thumbs = sketch.map(id => {
      const to = url.replace(currentId, id);
      const className = currentId === id ? 'on' : '';
      return <Link className={className} to={to} key={id}>
        <img src={`/img/processing/${id}.png`} alt={id} />
      </Link>;
    });
    return <div style={contentStyle} className="ProcessingSketch">
      <nav>
        {thumbs}
        <Link to="/misc" className="close">
          <i className="fa fa-close" />
        </Link>
      </nav>
      <canvas ref="canvas" style={canvasStyle} className="ProcessingSketch" />
    </div>;
  }
}
