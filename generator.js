const {writeFileSync, readFileSync} = require('fs');
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});
require('ignore-styles');

const {renderContentPage} = require('./src/ServerApp.jsx');
const pageTemplate = readFileSync('./build/index.html').toString();

const wrapContent = (content => pageTemplate.replace('{{content}}', content));

[
  '/home',
  '/skills',
  '/misc',
  '/about'
].forEach((path) => writeFileSync(`./build${path}.html`, wrapContent(renderContentPage(path))));

writeFileSync('./build/index.html', wrapContent(renderContentPage('/')));
