
(function($){
	$(function(){

        if($('.contributors').length){$('.contributors').selectric();}


/*function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}*/
   
        
         

        
    var string = "First of all, we'd like to say:" ;
        var str = string.split("");
        var el = document.getElementById('thank-you-heading');
        (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
        var running = setTimeout(animate, 90);
    })();


        // This function for scroll animation
        /*if ($(window).width() >  767){*/
            var $animation_elements = $('.thank-you, .donate, .healthy');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function() {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        /*}*/
        // End animation function

        
        var typing = false;
        $(window).scroll(function() {
          if ($('.donate').hasClass('in-view') && typing == false) {
            typing = true;
            typeIt("to everyone who took the time to:");
          }
        });



        function typeIt(text) {
          $("#donate-heading").typed({
            strings: [text],
            typeSpeed: 90,
            startDelay: 400,
            showCursor: false,
            // backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function() {}
              // call function after typing is done. You can use this to set the typing variable to false if you wanted so that your text types again.
              // callback: function(){typing = false; } 
          });
        }
        
        
        var typing2 = false;
        $(window).scroll(function() {
          if ($('.healthy').hasClass('in-view') && typing2 == false) {
            typing2 = true;
            typeIt2("and hope everyone is staying safe and:");
          }
        });

        function typeIt2(text) {
          $("#health-heading").typed({
            strings: [text],
            typeSpeed: 90,
            startDelay: 400,
            showCursor: false,
            // backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function() {}
              // call function after typing is done. You can use this to set the typing variable to false if you wanted so that your text types again.
              // callback: function(){typing = false; } 
          });
        }
$('.data1').rollNumber({
     
      number: 10,  //
      // speed: 100,    //
      // interval: 100, //
       rooms: 2,      //
       space: 20,     //
       symbol: ',',   //
      fontStyle: {   
        'font-size': 36, 
        color: '#ffffff',
      }
   })
        
        $('.data').rollNumber({
     
      number: 4566981,  //
      // speed: 100,    //
      // interval: 100, //
       rooms: 9,      //
       space: 20,     //
       symbol: ',',   //
      fontStyle: {   
        'font-size': 36, 
        color: '#ffffff',
      }
   })

        
        
	})// End ready function.
  
    
    

	

})(jQuery)

