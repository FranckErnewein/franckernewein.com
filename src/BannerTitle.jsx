import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const {round, random} = Math;

/*
const b = () => round(random() * 55);
const g = () => round(random() * 155) + 100;
const r = () => round(random() * 155) + 100;
*/

//const randCol = () => round(random() * 55) + 180;
const randCol = () => round(random() * 255);

function randColors() {
  return new Array(3).fill().map(randCol);
//return `${r()},${g()},${b()}`;
//return `${randCol()},${randCol()},0`;
}
function randCoor() {
  return round((random() - 0.5) * 7) + 'px';
}
function randOpacity() {
  return round(random() * 50) / 100 + 0.2;
}

function randShadow() {
  return `${randCoor()} ${randCoor()} 0 rgba(${randColors()},${randOpacity()})`;
}

const generateShadow = () => new Array(3).fill().map(randShadow);


export default class BannerTitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shadows: generateShadow()
    };
  }
  componentDidMount() {
    this.vibrate();
  }
  componentWillUnmount() {
    this.clear();
  }
  clear() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
    clearTimeout(this.nextVirbation);
  }
  vibrate() {
    this.clear();
    this.interval = setInterval(() => this.update(), round(random() * 55) + 15);

    const vibrationDuration = round(random() * 500) + 50;
    this.timeout = setTimeout(() => {
      clearInterval(this.interval);
    }, vibrationDuration);
    this.nextVirbation = setTimeout(() => {
      this.vibrate();
    }, round(random() * 2000) + vibrationDuration + 100);
  }
  update() {
    this.setState({
      shadows: [...this.state.shadows.slice(1, 3), randShadow()]
    });
  }
  render() {
    const style = {
      textShadow: this.state.shadows.join(', ')
    };
    return <h1><Link to="/" style={style}>Franck Ernewein</Link></h1>;
  }
}
