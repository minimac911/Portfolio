$(document).ready(function(){
	$('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        if( $( this ).hasClass( "open" )){
            $(".options").animate({
                left : '0px'
            });
        }else{
            $(".options").animate({
                left : '-200px'
            });
        }
	});
});