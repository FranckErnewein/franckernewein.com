import React, { Component } from 'react';

import './TypeWriter.css';


export default class TypeWriter extends Component {
  state = {
    text: ''
  }
  componentDidMount() {
    const {text, timer} = this.props;
    this.typeText(text, timer);
  }
  componentWillUnmount() {
    this.clearTimeouts();
  }
  typeText(text, timer) {
    this.clearTimeouts();
    this.timeouts = text.split('').map((c, i) => setTimeout(() => {
      this.setState({
        text: text.slice(0, i + 1)
      });
    }, i * timer));
  }
  clearTimeouts() {
    if (this.timeouts) {
      this.timeouts.forEach(t => clearTimeout(t));
    }
  }
  render() {
    const {text} = this.state;
    const {timer} = this.props;
    const charWidth = 0.68;

    return <span className="TypeWriter">
      {text.split('').map((c, i) => {
        const style = {
          left: (i * charWidth) + 'em',
          width: charWidth + 'em',
          animationDuration: (timer * 2) + 'ms'
        };
        return <span key={i} style={style} className="TypeWriter-LastChar">
          {c}
        </span>;
      })}
    </span>;
  }
}
