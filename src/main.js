
// Main script for importing assets, modules, etc.

import './index.html'
import './scss/styles.scss';
import Logo from './images/webpack-logo.png';

const img = document.createElement( 'img' );
img.src = Logo;

window.addEventListener( 'load', function someAction() {
  document.body.appendChild( img );
  console.log( 'ok' );
} );
