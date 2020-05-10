(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {

        'use strict';
        
          $('.nav-button').click(function() {
            $('.nav-button').toggleClass('change');
            $('.navbar-collapse').toggleClass('collapse');
          });

          $(window).scroll(function() {
            let position = $(this).scrollTop();
            if(position >= 650) {
              $('.camera-img').addClass('fromLeft');
              $('.mission-text').addClass('fromRight');
            } else {
              $('.camera-img').removeClass('fromLeft');
              $('.mission-text').removeClass('fromRight');
            }
          });  
    })
);