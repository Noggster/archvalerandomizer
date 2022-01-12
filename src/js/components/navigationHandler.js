const navHandler = {

	settings: {

		elements: {
			nav: '.js-navbar',
		},

		vars: {
			didScroll: false,
			navbarHeight: 0,
			lastScrollTop: 0,
			delta: 10
		}
	},

	init() {
		//this.toggleStickyNavState();
	},

	/*
	 * Updates state of navbar depending on scroll
	 */
	toggleStickyNavState() {
		// Hide Header on on scroll down
		this.settings.vars.navbarHeight = document.querySelector(this.settings.elements.nav).offsetHeight;

		window.addEventListener('scroll', () => {
			this.settings.vars.didScroll = true;
		});

		setInterval(() => {
			if(this.settings.vars.didScroll) {
		        this.hasScrolled();
		        this.settings.vars.didScroll = false;
		    }
		}, 250);
	},

	/* 
	 * Updates sticky nav state depending on scrolling
	 * Modified from: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
	 */
	hasScrolled: function() {

	    let scrollTopValue = window.pageYOffset;
	    const navEl = document.querySelector(this.settings.elements.nav);
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(this.settings.vars.lastScrollTop - scrollTopValue) <= this.settings.vars.delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (scrollTopValue > this.settings.vars.lastScrollTop && scrollTopValue > this.settings.vars.navbarHeight) {
	        // Scroll Down
	        navEl.classList.remove('nav-down');
			navEl.classList.add('nav-up');
	    } else {
	        // Scroll Up
	        if(scrollTopValue + window.outerHeight < document.body.clientHeight) {
	            navEl.classList.remove('nav-up');
	            navEl.classList.add('nav-down');
	        }
	    }

	    if(window.pageYOffset < 200) {
			navEl.classList.remove('nav-down');
		}
	    
	    this.settings.vars.lastScrollTop = scrollTopValue;
	}
}

export { navHandler };