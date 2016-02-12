$(document).ready(function () {
	 
	// preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});



	// serve static files via jquery
	$('#nav-bar ul a').click(function () {
		 
		 var $linkClicked = $(this).attr('href');
		 document.location.hash = $linkClicked;

		 if( !$(this).hasClass('active')){

		 	$('#nav-bar ul a').removeClass('active');
		 	$(this).addClass('active');
		 	$('#main-content section').hide();
		 	$($linkClicked).fadeIn();

		 	return false;

		 } else {

		 	return false;
		 }
	});

	// checks if the url has a hash at the end of it
	var hash = window.location.hash;
	hash = hash.replace(/^#/, '');

	switch (hash) {
		case 'block-2' :
			$("#" + hash + "-link").trigger("click");
            break;
        case 'block-3' :
			$("#" + hash + "-link").trigger("click");
            break;
        case 'block-4' :
			$("#" + hash + "-link").trigger("click");
            break;

	}






});