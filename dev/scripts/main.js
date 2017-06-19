	

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.menu').toggleClass('show');
	});
  	$("a").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	    event.preventDefault();
		// Store hash
	    var hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
	    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	     $('html, body').animate({
	     scrollTop: $(hash).offset().top
	     }, 800, function(){
	   	// Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	      });
	    } // End if
	});
    window.sr = ScrollReveal();
	sr.reveal('.tile', { duration: 2000 }, 500);	
	new WOW().init();
	new Vivus('Layer_1', {
		duration: 200,
		type: 'delayed'}, vivusCallback);
	function vivusCallback(){
		console.log(arguments, "hey")
	}
});	
		
