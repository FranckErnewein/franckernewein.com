import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function MainNavLink(props){
  const {to, children, match} = props;
  console.log(match);
  return <Route path={to} children={(match) => {
    return <Link to={to}>
      {children}
    </Link>;
  }}/>;
}
