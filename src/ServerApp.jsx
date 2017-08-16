import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export function renderContentPage(location) {
  return renderToStaticMarkup(<StaticRouter context={{}} location={location}>
    <App />
  </StaticRouter>);
}
