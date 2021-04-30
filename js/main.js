$(document).ready(function(){

	//_____stickyNavbar
    $(".sticky-nav").sticky({topSpacing:0});
   // _____scrollSpy
	$('body').scrollspy({ target: '.sticky-nav' })

   //_____smoothScroll
    $("nav a.nav-link").on('click', function(event) {
      if (this.hash !== "") {
       //Prevent default anchor click behavior
       event.preventDefault();
       //hash store
       var hash = this.hash;
       $('html, body').animate({
       scrollTop: $(hash).offset().top
       }, 1200, function(){
       window.location.hash = hash;
       });
      } // End if
    });

	//_____headerSlider
	  $('.header-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    mouseDrag:false,
	    autoplay:true,
	    smartSpeed:1200,
	    autoplayTimeout:6000,
	    autoplayHoverPause:true,
	    touchDrag:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	 //_____reviewSlider
	   $('.review-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    smartSpeed:1200,
	    touchDrag:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	//_____processBar-1
	$('#demo-pie-1').pieChart({
	    barColor: '#7087FD',
	    trackColor: '#3A344F',
	    lineWidth:8,
	    onStep: function (from, to, percent) {
	        $(this.element).find('.pie-value').text(Math.round(percent) + '%');
	    }
	});

	//_____processBar-2
	$('#demo-pie-2').pieChart({
	    barColor: '#7087FD',
	    trackColor: '#3A344F',
	    lineWidth:8,
	    onStep: function (from, to, percent) {
	        $(this.element).find('.pie-value').text(Math.round(percent) + '%');
	    }
	});

	//_____processBar-3
	$('#demo-pie-3').pieChart({
	    barColor: '#7087FD',
	    trackColor: '#3A344F',
	    lineWidth:8,
	    onStep: function (from, to, percent) {
	        $(this.element).find('.pie-value').text(Math.round(percent) + '%');
	    }
	});

	//_____processBar-4
	$('#demo-pie-4').pieChart({
	    barColor: '#7087FD',
	    trackColor: '#3A344F',
	    lineWidth:8,
	    onStep: function (from, to, percent) {
	        $(this.element).find('.pie-value').text(Math.round(percent) + '%');
	    }
	});

	//_____imagesLoader, 
	//_____protfolioFilter
	$('').imagesLoaded( function() {
  	 	var $grid = $('.protfolio').isotope({
        });
	   $('.protfolio-nav').on( 'click', 'li.nav-item', function() {
	 		 var filterValue = $(this).attr('data-filter');
	  		$grid.isotope({ filter: filterValue });
		});
		$('.protfolio').isotope({
		  itemSelector: '.protfolio-item',
		  percentPosition: true,
		  masonry: {
		    // use outer width of grid-sizer for columnWidth
		    columnWidth: '.protfolio-item'
		  }
		});

	
	});
//_____protfolioNavLinkSwitch
		$('.protfolio-nav ').on('click', '.nav-item', function(event) {
			$(this).addClass('active').siblings().removeClass('active');
		});

		//_____protfolioActiveItemSwitch
		$('.single-protfolio').on('click',  function(event) {
	     	$(this).parent().addClass("active").siblings().removeClass('active');
		});
	//_____introTextAnimation
	//headerSlider
	var typed = new Typed('#headerSlideText1', {
	  strings: ["I'm jack baky."],
	  typeSpeed: 100,
	  backSpeed: 80,
	  startDelay: 800,
	  cursorChar: '_',
	  loop: true,
	});

	//_____introTextAnimation 
	//aboutMeText
	var typed = new Typed('#aboutMeText', {
	  strings: ["About Me "],
	  typeSpeed: 100,
	  backSpeed: 100,
	  startDelay: 1000,
	  cursorChar: '.',
	   backDelay: 2000,
	  loop: true,
	});

	//_____introTextAnimation 
	//activeJobsText
	var typed = new Typed('#activeJobsText', {
	  strings: ["Active jobs"],
	  typeSpeed: 100,
	  backSpeed: 100,
	  startDelay: 1000,
	  cursorChar: '.',
	   backDelay: 2000,
	  loop: true,
	});
	//_____introTextAnimation 
	//mySkillsText
	var typed = new Typed('#mySkillsText', {
	  strings: ["My skills"],
	  typeSpeed: 100,
	  backSpeed: 80,
	  startDelay: 800,
	  cursorChar: '_',
	  loop: true,
	  backDelay: 1000,
	  fadeOut: true,
     fadeOutDelay: 2000,
	});

	//_____introTextAnimation 
	//latestWorkText
	var typed = new Typed('#latestWorkText', {
	  strings: ["Latest Work"],
	  typeSpeed: 100,
	  backSpeed: 80,
	  startDelay: 800,
	  cursorChar: '_',
	  loop: true,
	  backDelay: 1000,
	  fadeOut: true,
     fadeOutDelay: 2000,
	});

	//_____introTextAnimation 
	//projectText
    var typed = new Typed('#projectText', {
	  strings: ["You have any project?"],
	  typeSpeed: 100,
	  backSpeed: 80,
	  startDelay: 800,
	  cursorChar: '_',
	  loop: true,
	});
	//_____hide side bar
	 $('#navbarSupportedContent ul li a').on('click', function (event) {
            event.preventDefault();
            $(this).parents('#navbarSupportedContent').removeClass("show");
        });
});//_____jQueryEnd
