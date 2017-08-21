/* eslint react/no-multi-comp: 0 */
import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function MainNavItem(props) {
  const {to, children} = props;
  return <div className="columns three">
    <Route path={to} children={(match) => {
      const className = (match && match.match) ? 'on' : '';
      return <Link to={to} className={className}>
        {children}
      </Link>;
    }}/>
  </div>;
}
