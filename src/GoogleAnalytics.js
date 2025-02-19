import { Component } from 'react';
import ReactGA from 'react-ga';

if(typeof window !== 'undefined'){
  ReactGA.initialize('UA-32876599-5');
}

export default class GoogleAnalytics extends Component {
  constructor(props) {
    super(props);
    this.sendPageChange(props.location.pathname, props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname
      || this.props.location.search !== nextProps.location.search) {
      this.sendPageChange(nextProps.location.pathname, nextProps.location.search);
    }
  }

  sendPageChange(pathname, search = '') {
    if(ReactGA){
      const page = pathname + search;
      ReactGA.set({
        page
      });
      ReactGA.pageview(page);
    }
  }

  render() {
    return null;
  }
}
