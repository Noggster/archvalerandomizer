/*
 * Helper functions
 */
const helperFuncs = {

	/*
	 * Loads .svg files from img-elements with class 'js-convert-svg'
	 * and inserts them into DOM as <svg>-elements replacing the <img>-tag.
	 */
	convertSVG() {

		// If SVG isn't supported, abort.
		if (typeof SVGRect == 'undefined') return;

		const convertElems = document.querySelectorAll('img.js-convert-svg[src$=".svg"]');

		convertElems.forEach(el => {
			const imgUrl = el.src;
			const attributes = el.attributes;

			let ajax = new XMLHttpRequest();

			ajax.open('GET', imgUrl, true);
			ajax.send();

			ajax.onload = (e) => {
				const svgString = ajax.responseText;
				const svgEl = helperFuncs.stringToHTML(svgString);
				const attributeEntries = Object.entries(attributes);

				// Add attributes from the img-element to the new svg-element
				attributeEntries.forEach(attr => {
					const attrObj = attr[1];

					// If object isn't available or the attribute is 'src' don't run any logic
					if(!attrObj || attrObj.name == 'src') return;

					svgEl.setAttribute(attrObj.name, attrObj.value);

					// Add a class indicating the object has been loaded
					//svgEl.classList.add('js-converted');
				});

				el.replaceWith(svgEl);
			}
		});
	},

	/*
	* Turn array into string for PHP-usage
	* https://stackoverflow.com/a/19429400/1166965
	*/
	arrayToKeyValueString(name, arr){
	    var str = name + '[]=';
	    for(var i=0; i<arr.length; i++){
	        arr[i] = encodeURIComponent(arr[i]);
	    }

	    str += arr.join('&' + name + '[]=');
	    return str;
	},

	/*
	 * Takes string and parses it into a HTML-object
	 */
	stringToHTML(str) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(str, 'text/html');

		return doc.body.childNodes[0];
	},

	/*
    * Makes sure the child element is the same height as nearest parent
    */
    setElHeightFromParent() {

    	window.addEventListener('load', (event) => {

	    	const elements = document.querySelectorAll('.js-set-height-parent');

	    	if(elements) {

	    		elements.forEach((el, index) => {
	    			const parentHeight = el.parentElement.offsetHeight;

	    			el.style.height = ( parentHeight ) + 'px';
	    		});
	    	}
	    });
    },

    /*
    * Sets equal heights on all elements matching class
    */
    setEqualHeight() {

    	window.addEventListener('load', (event) => {

    		const wrappers = document.querySelectorAll('.js-set-eq-height-wrapper');

    		if(wrappers) {

    			wrappers.forEach((el, index) => {
    				let currHeight = 0;
    				const children = el.children;

    				if(children) {

    					for(let child of children) {
    						if(child.offsetHeight > currHeight) {
    							currHeight = child.offsetHeight;
    						}
    					}

    					for(let child of children) {
    						child.style.height = ( currHeight ) + 'px';
    					}
    				}
	    		});
    		}
	    });
    },

    /*
    * Looks if value is in array
    */
    checkArray(val, arr) {
		if (arr.indexOf(val) !== -1) {
			return arr.indexOf(val);
		} else {
			return false;
		}
	}
}

export { helperFuncs };