$(function() {
    // Handler for .ready() called.
    $('#show-categories-menu').on('click',function(e){
    e.preventDefault();
     $('#categories-menu-content').toggleClass('hidden-xs hidden-sm');
     $('#show-categories-menu .fa').toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
    });
    
     $('#show-search-menu').on('click',function(e){
    e.preventDefault();
     $('#search-menu').toggleClass('hidden-xs hidden-sm');
     $('#show-search-menu .fa').toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
    });
    
  });