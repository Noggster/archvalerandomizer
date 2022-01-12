import '../scss/app.scss';

/*
* Polyfills
*/
if(window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

if(!Object.entries) {

	var root = document.getElementsByTagName( 'html' )[0];
	root.setAttribute( 'class', 'ie11' );

  Object.entries = function(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

// Helpers
import { helperFuncs } from './components/helpers.js';

// Navigation module
import { navHandler } from './components/navigationHandler.js';

const app = {

	settings: {
	},

	init() {

		// Handles all logic needed for navigation
		navHandler.init();

		// Converts <img>-tags containing svg-files to inline <svg>
		helperFuncs.convertSVG();
	}
}

document.addEventListener('DOMContentLoaded', () => {	
	app.init();
});

