$(document).ready(function(){
	$('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        if( $( this ).hasClass( "open" )){
            $(".options-list").animate({
                left : '0px'
            });
        }else{
            $(".options-list").animate({
                left : '-200px'
            });
        }
	});
});

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});