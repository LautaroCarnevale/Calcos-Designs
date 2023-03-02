;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var tabs = function() {

		// Auto adjust height
		$('.fh5co-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.fh5co-tab-content-wrap'),
					tabHeight = $('.fh5co-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.fh5co-tab-content-wrap'),
						tabHeight = $('.fh5co-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.fh5co-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.fh5co-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.fh5co-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		tabs();
		goToTop();
		loaderPage();
		counterWayPoint();
		sliderMain();
		testimonialCarousel();
	});


}());



//filter products
var $mediaElements = $(".cd-item");
$(".filter_link").click(function(e) {
  e.preventDefault();
  var filterVal = $(this).data("filter");
  if (filterVal === "all") {
    $mediaElements.slideDown("slow");
  } else {
    $mediaElements
      .hide("slow")
      .filter("." + filterVal)
      .slideDown("slow");
  }
});
//zoom

var fruit = ["apple", "orange", "pear"];
$(".foo").text(fruit.length);

var modal = document.getElementById("myModal");
var span = $(".close");

// span.onclick = function() {
//   modal.style.display = "none";
// };

span.on("click", function() {
    modal.style.display = "none";
});

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) { // looping through all image tag names in document. on click of image, run function of displaying modal with source URL, alt text, and caption
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  };
}












// (function(){ 
// 	paginateChildren($('.pagination-example'));
//         }(jQuery));
        
//         function paginateChildren(parentElement) {
// 	  var page = 1;
// 	  var currentElements;
// 	  var offsetStart;
// 	  var offsetEnd;
// 	  var currentPage = 1;
// 	  var elementsPerPage = 9;
// 	  var elements = parentElement.find($('.paged-element'));
// 	  var nmbrOfPages = Math.ceil(elements.length / elementsPerPage);
// 	  var displayNav = function () {
// 		var htmlNav = '';
// 		htmlNav += '<span>' + currentPage + ' of ' + nmbrOfPages + '</span><br />';
// 		htmlNav += '<a href="#" title="Previous" rel="" class="prev">&lt;&lt;<i class="fa fa-angle-left fa-lg"></i></a>';
// 		htmlNav += '<a href="#" title="Next" rel="" class="next active">&gt;<i class="fa fa-angle-right fa-lg"></i></a>';
	  
// 		if (!$(parentElement).find('.paginationNav').length) {
// 		  $(parentElement).append('<div class="paginationNav pull-right">' + htmlNav + '</div>');
// 		}
// 	  };
// 	  $(parentElement).on('click', '.paginationNav a.prev', function (e) {
// 	      e.preventDefault();
// 	      page = currentPage > 1 ? parseInt(currentPage) - 1 : 1;
// 	      displayPage(page);
// 	  });
// 	  $(parentElement).on('click', '.paginationNav a.next', function (e) {
// 	      e.preventDefault();
// 	      page = currentPage < nmbrOfPages ? parseInt(currentPage) + 1 : nmbrOfPages;
// 	      displayPage(page);
// 	  });
// 	  var displayPage = function (page) {
// 	      if (currentPage != page || page == 1) {
// 		currentPage = parseInt(page);
// 		$('.paginationNav span', parentElement).html(currentPage + ' of ' + nmbrOfPages);
// 		var $prevButton = $('.paginationNav a.prev');
// 		var $nextButton = $('.paginationNav a.next');
// 		if (currentPage == 1 && nmbrOfPages > 1) {
// 		    if ($prevButton.hasClass('active')) {
// 		        $prevButton.removeClass('active');
// 		    }
// 		    $nextButton.addClass('active');
// 		} else if (currentPage > 1 && currentPage < nmbrOfPages) {
// 		    $prevButton.addClass('active');
// 		    $nextButton.addClass('active');
// 		} else if (nmbrOfPages > 1 && currentPage == nmbrOfPages) {
// 		    $prevButton.addClass('active');
// 		    if ($nextButton.hasClass('active')) {
// 		        $nextButton.removeClass('active');
// 		    }
// 		}
// 		offsetStart = (page - 1) * elementsPerPage;
// 		offsetEnd = page * elementsPerPage;
// 		if (currentElements) {
// 		    currentElements.hide();
// 		} else {
// 		    elements.hide();
// 		}
// 		currentElements = elements.slice(offsetStart, offsetEnd);
// 		currentElements.fadeIn();
// 	      }
// 	  };
// 	  if (page.length <= 0 || page < 1 || page > nmbrOfPages) {
// 	      page = 1;
// 	  }
// 	  displayPage(page);
// 	  if (nmbrOfPages > 1) {
// 	      displayNav();
// 	  }
//         }
        
        



// // buscador mas carts---------------------




// 		// -PLUGIN START
// class Pagination {
// 	/**
// 		* Create pagination.
// 		* @param {object} elem - JS or jQuery document element
// 		* @param {object} options - Custom pagination options (overwrites defaults)
// 	 * @return {object} The container and options
// 		*/
// 	constructor(elem, options) {
// 	  this.$el = elem instanceof jQuery ? elem : $(elem);
  
// 	  // retrieve options
// 	  this.options = this.$el.data('pagination-options') || {
// 		perPage: 5,
// 		page: 0,
// 		visiblePages: 5,
// 		transition: {
// 		  type: null,
// 		  duration: 150 },
  
// 		buttons: {
// 		  first: '&laquo;',
// 		  prev: '&lsaquo;',
// 		  next: '&rsaquo;',
// 		  last: '&raquo;' } };
  
  
  
// 	  // save the original content
// 	  if (!this.$el.data('pagination-content'))
// 	  this.$el.data('pagination-content', this.$el.children());
  
// 	  this.$pagination = this.$el.next('nav');
  
// 	  if (options !== null && !this.$el.data('pagination')) {
// 		if (typeof options !== 'object' || Array.isArray(options)) {
// 		  throw new Error(`[Pagination] Pagination options must be an object (provided ${typeof options})`);
// 		} else if (!Object.keys(options).length) {
// 		  console.warn('[Pagination] No options provided (empty object) - initiating using default settings');
// 		} else if (options.visiblePages > 1 && options.visiblePages % 3 > 0) {
// 		  throw new Error(`[Pagination] "visiblePages" variable must be an odd number. (currently set to ${options.visiblePages})`);
// 		} else {
// 		  // merge custom options with the defaults
// 		  for (let key in options) {
// 			if (!options.hasOwnProperty(key))
// 			continue;
  
// 			if (typeof options[key] == 'object') {
// 			  this.options[key] = Object.assign(this.options[key], options[key]);
// 			} else {
// 			  this.options[key] = options[key];
// 			}
// 		  }
// 		}
  
// 		this.$el.data('pagination-options', this.options);
// 	  }
  
// 	  this.$pages = this.$el.data('pagination-content');
// 	  this.pages = Math.ceil(this.$pages.length / this.options.perPage);
// 	  if (!this.$el.data('pagination-index')) {
// 		this.$el.data('pagination-index', {
// 		  start: 0,
// 		  end: this.options.perPage,
// 		  page: {
// 			current: this.options.page,
// 			min: 0,
// 			max: this.pages > 0 ? this.pages - 1 : this.pages } });
  
  
// 	  }
// 	  this.index = JSON.parse(JSON.stringify(this.$el.data('pagination-index')));
// 	  this.$template = {
// 		pagination: $(`<nav class="mt-3" aria-label="Pagination">
// 				  <ul class="pagination justify-content-center"></ul>
// 			  </nav>`),
// 		item: $(`<li class="page-item"><a class="page-link" href="#">$</a></li>`),
// 		first: $(`<li class="page-item first">
// 				  <a class="page-link" href="#first" aria-label="First">
// 					  <span aria-hidden="true">${typeof this.options.buttons.first == 'string' ? this.options.buttons.first : '&laquo;'}</span>
// 					  <span class="sr-only">First</span>
// 				  </a>
// 			  </li>`),
// 		prev: $(`<li class="page-item prev">
// 				  <a class="page-link" href="#prev" aria-label="Previous">
// 					  <span aria-hidden="true">${typeof this.options.buttons.prev == 'string' ? this.options.buttons.prev : '&lsaquo;'}</span>
// 					  <span class="sr-only">Previous</span>
// 				  </a>
// 			  </li>`),
// 		next: $(`<li class="page-item next">
// 				  <a class="page-link" href="#next" aria-label="Next">
// 					  <span aria-hidden="true">${typeof this.options.buttons.next == 'string' ? this.options.buttons.next : '&rsaquo;'}</span>
// 					  <span class="sr-only">Next</span>
// 				  </a>
// 			  </li>`),
// 		last: $(`<li class="page-item last">
// 				  <a class="page-link" href="#last" aria-label="Last">
// 					  <span aria-hidden="true">${typeof this.options.buttons.last == 'string' ? this.options.buttons.last : '&raquo;'}</span>
// 					  <span class="sr-only">Last</span>
// 				  </a>
// 			  </li>`),
// 		noresults: $(`<div class="col-12 my-1 my-md-3" role="alert">
// 				  <div class="alert alert-info text-center">
// 					  <strong>Perdon!</strong> No se encontraron resultados.
// 				  </div>
// 			  </div>`) };
  
  
// 	  this.searching = this.$el.data('pagination-searching') || false;
  
// 	  console.log(this);
  
// 	  // initiate the pagination
// 	  this.init();
  
// 	  // return the result
// 	  return this;
// 	}
  
// 	/**
// 	 * Initiates a pagination.
// 	 */
// 	init() {
// 	  // stop any further action if the pagination was already initiated before
// 	  if (this.$el.data('pagination'))
// 	  return;
  
// 	  // attach listener to the "previous" button and append it
// 	  for (let key in this.options.buttons) {
// 		if (this.options.buttons.hasOwnProperty(key) && !this.options.buttons[key])
// 		continue;
  
// 		this.$template[key].find('a').on('click', event => {
// 		  event.preventDefault();
// 		  this.render(key);
// 		});
// 		this.$template.pagination.find('.pagination').append(this.$template[key]);
// 	  }
  
// 	  // append the pagination
// 	  this.$pagination = this.$template.pagination.insertAfter(this.$el);
  
// 	  // render the initial page
// 	  this.render(false);
// 	  this.$el.data('pagination', true);
  
// 	  // trigger an event
// 	  this.$el.trigger('init.pagination');
// 	}
  
// 	/**
// 	 * Renders a page.
// 	 * @param {boolean} page - Index of the page that needs to be rendered.
// 	 * @param {string} page - "first", "prev", "next" or "last"
// 	 */
// 	render(page = this.index.page.current) {
// 	  this.searching = this.$el.data('pagination-search');
// 	  this.index = this.searching ? this.searching.index : this.$el.data('pagination-index');
// 	  this.$pages = this.searching ? this.searching.matches : this.$el.data('pagination-content');
  
// 	  console.log({
// 		currentPage: this.$currentPage,
// 		matches: this.searching ? this.searching.matches : null });
  
  
// 	  let transitions = true;
// 	  if (typeof page === 'boolean') {
// 		transitions = page;
// 		page = this.index.page.current;
// 	  } else if (typeof page === 'string') {
// 		switch (page) {
// 		  case 'first':
// 			this.index.page.current = this.index.page.min;
// 			break;
  
// 		  case 'prev':
// 			if (this.index.page.min < this.index.page.current)
// 			this.index.page.current--;
// 			break;
  
// 		  case 'next':
// 			if (this.index.page.current < this.index.page.max)
// 			this.index.page.current++;
// 			break;
  
// 		  case 'last':
// 			this.index.page.current = this.index.page.max;
// 			break;}
  
  
// 		page = this.index.page.current;
// 	  }
  
// 	  // fix the page index if it is too low/high
// 	  if (page > this.index.page.max)
// 	  page = this.index.page.max;else
// 	  if (page < this.index.page.min)
// 	  page = this.index.page.min;
  
// 	  // update the current index if it is not correct for some reason
// 	  if (page !== this.index.page.current)
// 	  this.index.page.current = page;
  
// 	  // increment the page number by one to accurately calculate the start/end offsets
// 	  page++;
  
// 	  // update start/end indexes
// 	  this.index.end = page * this.options.perPage;
// 	  this.index.start = this.index.end - this.options.perPage;
  
// 	  // update content
// 	  if (this.options.transition.type && transitions) {
// 		// set the min-height to avoid content jumping
// 		this.$el.css('minHeight', this.$el.outerHeight());
  
// 		// transition out the old content
// 		this.$el.stop()[this.options.transition.type + 'Out'](this.options.transition.duration, () => {
// 		  // update content
// 		  this.update();
  
// 		  // transition in the new content
// 		  this.$el.stop()[this.options.transition.type + 'In'](this.options.transition.duration, () => {
// 			// smoothly adjust back the height
// 			this.$el.stop().animate({
// 			  minHeight: 0 },
// 			this.options.transition.duration / 1.5, () => this.$el.css('minHeight', ''));
  
// 			// trigger an event
// 			this.$el.trigger('rendered.pagination');
// 		  });
// 		});
// 	  } else {
// 		// update content
// 		this.update();
  
// 		// trigger an event
// 		this.$el.trigger('rendered.pagination');
// 	  }
  
// 	  // remove event listener and then the element itself
// 	  this.$pagination.find('li:not(.first, .prev, .next, .last)').find('a').off('click').closest('li').remove();
  
// 	  // calculate start/end of the visible pagination items
// 	  this.paginator = {
// 		start: () => {
// 		  const end = this.index.page.max - this.options.visiblePages;
// 		  let result = this.index.page.current - Math.floor(this.options.visiblePages / 2);
// 		  if (result > end)
// 		  result = end + 1;
// 		  if (result < 0)
// 		  result = 0;
// 		  return result;
// 		},
// 		end: () => {
// 		  let result = this.paginator.start() + this.options.visiblePages;
// 		  if (result > this.index.page.max)
// 		  result = this.index.page.max + 1;
// 		  return result;
// 		} };
  
  
// 	  // render the needed pagination items
// 	  for (let i = this.paginator.start(); i < this.paginator.end(); i++) {
// 		const $item = this.$template.item.clone();
// 		const $anchor = $item.find('a');
// 		const page = i + 1;
  
// 		// attach data of the page index
// 		$anchor.attr('href', `#page-${page}`);
  
// 		// show currently active page
// 		if (this.index.page.current == i)
// 		$item.addClass('active');
  
// 		$anchor.off('click').text(page);
// 		$anchor.on('click', event => {
// 		  event.preventDefault();
  
// 		  // do not do anything if clicked on an active item
// 		  if (this.index.page.current == i)
// 		  return;
  
// 		  // update the current page index and render it
// 		  this.index.page.current = i;
// 		  this.render();
// 		});
  
// 		// append the item
// 		$item.insertBefore(this.$pagination.find('.next'));
// 	  }
  
// 	  // show the active page number
// 	  this.$pagination.find('li').removeClass('disabled active').filter(':not(.prev):not(.next)').filter((index, elem) => {
// 		return $(elem).text() == this.index.page.current + 1;
// 	  }).addClass('active');
  
// 	  // disable prev/next buttons if needed
// 	  if (this.index.page.current == this.index.page.min)
// 	  this.$pagination.find('li.first, li.prev').addClass('disabled');
// 	  if (this.index.page.current == this.index.page.max)
// 	  this.$pagination.find('li.last, li.next').addClass('disabled');
  
// 	  // save the updated indexes
// 	  if (!this.searching)
// 	  this.$el.data('pagination-index', this.index);
  
// 	  // return the result
// 	  return {
// 		container: this.$el,
// 		page: {
// 		  content: this.$page,
// 		  index: this.index.page.current } };
  
  
// 	}
  
// 	/**
// 	 * Searches for a match
// 	 * @param string
// 	 */
// 	search(params) {
// 	  const $finds = $('<div/>');
// 	  this.$pages = this.$el.data('pagination-content').clone();
  
// 	  // find the matching containers
// 	  this.$pages.each((index, parent) => {
// 		$(parent).find(params.targets).each((index, elem) => {
// 		  const $this = $(elem);
// 		  const regexp = new RegExp(params.string, 'gi');
// 		  const found = $this.text().search(regexp);
// 		  const match = $this.text().slice(found, found + params.string.length);
  
// 		  // store them
// 		  if (found > -1) {
// 			if (match.length) {
// 			  $this.html(
// 			  $this.text().replace(regexp, `<b class="text-primary">${match}</b>`));
  
// 			}
// 			$(parent).appendTo($finds);
// 		  }
// 		});
// 	  });
  
// 	  // gather all the matches
// 	  this.$pages = $finds.children();
  
// 	  // update the amount of pages
// 	  this.pages = Math.ceil(this.$pages.length / this.options.perPage);
// 	  this.index.page = {
// 		current: params.string.length ? 0 : this.$el.data('pagination-index').page.current,
// 		min: 0,
// 		max: this.pages > 0 ? this.pages - 1 : this.pages };
  
  
// 	  const search = params.string.length ? Object.assign({
// 		index: this.index,
// 		matches: this.$pages },
// 	  params) : false;
// 	  this.$el.data('pagination-search', search);
  
// 	  // render the result
// 	  this.render();
// 	}
  
// 	/**
// 	 * Goes to the defined page.
// 	 * @alias render
// 	 */
// 	goTo(page) {
// 	  if (typeof page == 'undefined')
// 	  return console.warn('[Pagination] Page index number must be defined when using "goTo" function');
  
// 	  return this.render(page);
// 	}
  
// 	/**
// 	 * Updates the content of the container.
// 	 * @return {object} jQuery object of the current page.
// 	 */
// 	update() {
// 	  // empty the container
// 	  this.$el.empty();
  
// 	  // gather the page
// 	  this.$currentPage = this.$pages.clone().filter(index => {
// 		return index >= this.index.start && index < this.index.end;
// 	  });
  
// 	  const $currentPage = this.$currentPage.length ? this.$currentPage : this.$template.noresults.clone();
  
// 	  // append it to the container
// 	  $currentPage.appendTo(this.$el);
  
// 	  // return a jQuery object
// 	  return $currentPage;
// 	}
  
// 	/**
// 	 * Destroys the pagination.
// 	 * @return {boolean} Success of the destruction
// 	 */
// 	destroy() {
// 	  if (!this.$el.data('pagination')) {
// 		console.warn('[Pagination] Could not destroy a non-existant pagination instance');
  
// 		// return an unsuccessful result
// 		return false;
// 	  }
  
// 	  // trigger an event
// 	  this.$el.trigger('destroying.pagination');
  
// 	  // remove data and empty the container
// 	  this.$el.removeData('pagination');
// 	  this.$el.removeData('pagination-index');
// 	  this.$el.removeData('pagination-options');
// 	  this.$el.empty();
  
// 	  // clear out pagination items
// 	  this.$template.pagination.find('.pagination').empty();
  
// 	  // remove pagination
// 	  if (this.$pagination.length) {
// 		this.$pagination.find('a').off('click');
// 		this.$pagination.remove();
// 	  }
  
// 	  // re-add the pages
// 	  this.$pages.appendTo(this.$el);
  
// 	  // trigger an event
// 	  this.$el.trigger('destroyed.pagination');
  
// 	  // return a successful result
// 	  return true;
// 	}}
  
  
//   // create a jQuery function for pagination
//   $.fn.pagination = function (options, value) {
// 	let pagination = null;
  
// 	if (typeof options === 'string')
// 	pagination = new Pagination(this, null)[options](value);else
  
// 	pagination = new Pagination(this, options);
  
// 	return pagination;
//   };
//   // -PLUGIN END
  
//   // initiate pagination jQuery way
//   const $pagination = $('[data-pagination]');
//   $pagination.on('init.pagination', event => {
// 	// console.log('pagination initiated, going to the 3rd page')
// 	// $(event.currentTarget).pagination('goTo', 2)
//   });
//   $pagination.on('rendered.pagination', () => console.log('page rendered'));
//   $pagination.on('destroying.pagination', () => console.log('destroying pagination...'));
//   $pagination.on('destroyed.pagination', () => console.log('pagination destroyed'));
//   $pagination.pagination({
// 	visiblePages: 6,
// 	perPage: 9 });
  
  
//   // destroying pagination jQuery way
//   // $('[data-pagination]').pagination('destroy')
  
//   // initiate pagination vanilla JS way (although the script still requires jQuery library)
//   // const pagination = new Pagination('[data-pagination]', {
//   // 	perPage: 4
//   // })
  
//   // destroying pagination vanilla JS way
//   // pagination.destroy()
  
//   // ----
  
//   const $clear = $('.clear-search');
//   const $search = $('[data-pagination-search]');
//   $search.data('clear-search', $clear.clone());
//   $clear.remove();
  
//   // clear search on a click of a button
//   $(document).on('click', '.clear-search .btn', () => $search.val('').trigger('keyup'));
  
//   // make a functional search
//   $search.keyup(event => {
// 	const $this = $(event.currentTarget);
// 	const targets = $this.data('pagination-search');
// 	const string = $this.val();
// 	const params = { targets, string };
// 	const $clearClone = $this.data('clear-search').clone();
// 	const $clear = $this.parent().find('.clear-search');
  
// 	// show/hide the "Clear" button to clear search with a press of a button
// 	if (string.length) {
// 	  if (!$clear.length)
// 	  $clearClone.appendTo($this.parent());
// 	} else {
// 	  $clear.remove();
// 	}
  
// 	// prevent unnecessary pagination rendering if the search string is empty and the previous search was also empty
// 	if (!$pagination.data('pagination-search') && !string.length)
// 	return;
  
// 	// search for a match
// 	$pagination.pagination('search', params);
//   });








  /* ----------------------------------------
Pagination Usage
-----------------------------------------*/
document.addEventListener("DOMContentLoaded",function(){
	pagination({
	   pageContent: "#paginationContentContainer",
	   pageNav: "#paginationNavContainer",
	   pageSize: 9 // default: 10
	 });
  });
  
  
  /* ----------------------------------------
  Pagination Utility
  -----------------------------------------*/
  const pagination = options => {
	const state = {
	  selectorPageContent: options.pageContent,
	  selectorPageNav: options.pageNav,
	  pageNavVisible: false,
	  pageItems: [],
	  pageTotal: null,
	  pageCurrent: 1,
	  pageSize: options.pageSize || 10,
	  pageRangeStart: null,
	  pageRangeEnd: null
	};
  
	let pageContent;
	let pageContentItems;
	let pageNav;
  
	function getElementsAndAddToState() {
	  pageContent = document.querySelector(state.selectorPageContent);
	  pageContentItems = pageContent.children;
	  pageNav = document.querySelector(state.selectorPageNav);
	  state.pageItems = Array.from(pageContentItems);
	}
  
	function calcNumPages() {
	  state.pageTotal = Math.ceil(state.pageItems.length / state.pageSize);
	}
  
	function togglePageNavVisibilityBasedOnPageTotal() {
	  if (state.pageSize < state.pageItems.length) {
		state.pageNavVisible = true;
	  }
	}
  
	function calcPageRange() {
	  state.pageRangeEnd = state.pageCurrent * state.pageSize;
	  state.pageRangeStart = state.pageRangeEnd - state.pageSize + 1;
	}
  
	function showPageContentContainer() {
	  pageContent.classList.add("pagination-content-is-visible");
	}
  
	function renderPageContent() {
	  pageContent = pageNavPrev = document.querySelector(`${state.selectorPageNav} [data-js="page-prev"]`);
	  state.pageItems.map(item => item.classList.add("is-hidden"));
	  state.pageItems.map((item, index) => {
		index = index + 1;
		if (index >= state.pageRangeStart && index <= state.pageRangeEnd) {
		  item.classList.remove("is-hidden");
		}
	  });
	}
  
	function renderPageNav() {
	  let pageNavHTML = ``;
	  let pageNavLinksHTML = ``;
	  let pageNavVisibleClass = ``;
	  if (state.pageNavVisible === false) {
		pageNavVisibleClass = "d-none";
	  }
	  const pageTotalArray = Array(state.pageTotal)
		.fill()
		.map((_, i) => i * i);
	  pageTotalArray.map((item, index) => {
		index = index + 1;
		pageNavLinksHTML += `<li data-js="page-item" class="page-item"><a data-js="page-link" data-id="${index}" class="page-link" href="#">${index}</a></li>`;
	  });
	  pageNavHTML = `
		<ul class="pagination ${pageNavVisibleClass}">
		  <li class="page-item disabled"><a data-js="page-prev" class="page-link page-link-arrow" href="#"><span aria-hidden="true">&lt;</span></a></li>
		  ${pageNavLinksHTML}
		  <li class="page-item"><a data-js="page-next" class="page-link page-link-arrow" href="#"><span aria-hidden="true">&gt;</span></a></li>
		</ul>
	  `;
	  pageNav.innerHTML = pageNavHTML;
	}
  
	function activateFirstLinkOnLoad() {
	  const pageNavItemFirst = document.querySelector(`${state.selectorPageNav} [data-js="page-item"]`);
	  pageNavItemFirst.classList.add("active");
	}
  
	function handlePageNavClicks() {
	  const pageNavPrev = document.querySelector(`${state.selectorPageNav} [data-js="page-prev"]`);
	  const pageNavNext = document.querySelector(`${state.selectorPageNav} [data-js="page-next"]`);
	  const pageNavLinks = document.querySelectorAll(`${state.selectorPageNav} [data-js="page-link"]`);
  
	  function activatePrevNextLinksAccordingToState() {
		if (state.pageCurrent === 1) {
		  pageNavPrev.parentElement.classList.add("disabled");
		} else {
		  pageNavPrev.parentElement.classList.remove("disabled");
		}
		if (state.pageCurrent === state.pageTotal) {
		  pageNavNext.parentElement.classList.add("disabled");
		} else {
		  pageNavNext.parentElement.classList.remove("disabled");
		}
	  }
  
	  function activatePageLinksAccordingToState(e) {
		const ul = e.target.closest("ul");
		const liArray = Array.from(ul.children);
		liArray.map(item => item.classList.remove("active"));
		const link = document.querySelector(`${state.selectorPageNav} [data-js="page-link"][data-id="${state.pageCurrent}"]`);
		link.parentElement.classList.add("active");
		activatePrevNextLinksAccordingToState();
	  }
  
	  pageNavPrev.addEventListener("click", e => {
		e.preventDefault();
		if (state.pageCurrent > 1) {
		  state.pageCurrent--;
		  activatePageLinksAccordingToState(e);
		  calcPageRange();
		  renderPageContent();
		}
	  });
	  pageNavNext.addEventListener("click", e => {
		e.preventDefault();
		if (state.pageCurrent < state.pageTotal) {
		  state.pageCurrent++;
		  activatePageLinksAccordingToState(e);
		  calcPageRange();
		  renderPageContent();
		}
	  });
	  pageNavLinks.forEach(link => {
		link.addEventListener("click", e => {
		  e.preventDefault();
		  state.pageCurrent = parseInt(e.target.dataset.id);
		  activatePageLinksAccordingToState(e);
		  calcPageRange();
		  renderPageContent();
		});
	  });
	}
  
	getElementsAndAddToState();
	showPageContentContainer();
	calcNumPages();
	togglePageNavVisibilityBasedOnPageTotal();
	calcPageRange();
	renderPageNav();
	renderPageContent();
	activateFirstLinkOnLoad();
	handlePageNavClicks();
  };
  
  
  
  $(document).ready(function() {

	function incrementValue(e) {
		  e.preventDefault();
  
		  var inputField = $(e.target).closest('.product-quantity-selector').find('input');
		  var currentVal = parseInt(inputField.val(), 10);
		  var maxAmount = inputField.data("max-amount");
	  
		  if (!isNaN(currentVal)) {
  
			if ((currentVal + 1) <= maxAmount) {
			  var nxtVal = (currentVal + 1);
			}
			else {
			  var nxtVal = maxAmount;
			}          
			  
		  } else {
			  var nxtVal = 1;
		  }
  
		  inputField.val(nxtVal);
		  // toggleButton(e,nxtVal);
  
	  }
  
	  function decrementValue(e) {
		  e.preventDefault();
  
		  var inputField = $(e.target).closest('.product-quantity-selector').find('input');
		  var currentVal = parseInt(inputField.val(), 10);
		  var minAmount = inputField.data("min-amount");
		
		  if (!isNaN(currentVal)) {
  
			if ((currentVal - 1) >= minAmount) {
			  var nxtVal = (currentVal - 1);
			}
			else {
			  var nxtVal = minAmount;
			}          
			  
		  } else {
			  var nxtVal = 1;
		  }
		
		  // if (!isNaN(currentVal) && currentVal > 0) {
		  //     var nxtVal = (currentVal - 1);
		  // } else {
		  //     var nxtVal = 1;
		  // }
  
		  inputField.val(nxtVal);
		  // toggleButton(e,nxtVal);
	  }
	
	 $('.product-quantity-selector').on('click', '.btn--subtract-quantity', function (e) {
		  decrementValue(e);
	  });
	
	$('.product-quantity-selector').on('click', '.btn--add-quantity', function (e) {
		  incrementValue(e);
	  });
	
  });




    $(document).ready(function() {

      function incrementValue(e) {
          e.preventDefault();
      
          var inputField = $(e.target).closest('.product-quantity-selector').find('input');
          var currentVal = parseInt(inputField.val(), 10);
          var maxAmount = inputField.data("max-amount");
        
          if (!isNaN(currentVal)) {
      
          if ((currentVal + 1) <= maxAmount) {
            var nxtVal = (currentVal + 1);
          }
          else {
            var nxtVal = maxAmount;
          }          
            
          } else {
            var nxtVal = 1;
          }
      
          inputField.val(nxtVal);
          // toggleButton(e,nxtVal);
      
        }
      
        function decrementValue(e) {
          e.preventDefault();
      
          var inputField = $(e.target).closest('.product-quantity-selector').find('input');
          var currentVal = parseInt(inputField.val(), 10);
          var minAmount = inputField.data("min-amount");
        
          if (!isNaN(currentVal)) {
      
          if ((currentVal - 1) >= minAmount) {
            var nxtVal = (currentVal - 1);
          }
          else {
            var nxtVal = minAmount;
          }          
            
          } else {
            var nxtVal = 1;
          }
        
          // if (!isNaN(currentVal) && currentVal > 0) {
          //     var nxtVal = (currentVal - 1);
          // } else {
          //     var nxtVal = 1;
          // }
      
          inputField.val(nxtVal);
          // toggleButton(e,nxtVal);
        }
      
       $('.product-quantity-selector').on('click', '.btn--subtract-quantity', function (e) {
          decrementValue(e);
        });
      
      $('.product-quantity-selector').on('click', '.btn--add-quantity', function (e) {
          incrementValue(e);
        });
      
      });




 
