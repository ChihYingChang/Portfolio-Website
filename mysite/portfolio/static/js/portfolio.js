$(function() {
    $('.wrapper').click(function() {
        $('.wrapper').each(function() {
           $(this).css('z-index', 0); 
        });
            $(this).css('z-index', 1); 
            $(this).toggleClass('open');    
    }) 

    $('.mobile-wrapper').click(function() {
        $('.mobile-wrapper').each(function() {
           $(this).css('z-index', 0); 
        });
            $(this).css('z-index', 1); 
            $(this).toggleClass('open');    
    }) 
  })