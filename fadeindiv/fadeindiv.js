/*global Drupal, jQuery */
/*eslint no-shadow-restricted-names: "undefined"*/

(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.fadeindiv = {
    attach: function(context, settings) {

      /* 
       * Define the selector for the elements you want to fade in
       * You can use ".fade-in-div", or customize
       */
       
      // var blox = $('.fade-in-div')
      var blox = $('body.somepage .somediv');
      var offset = 0.9;
      
      function hideBlocks(blocks, offset) {
  	    blocks.each(function() {
  	      ($(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).addClass('fadeindiv-hide');
  	    });
      }
      
      function showBlocks(blocks, offset) {
    	  blocks.each(function(){
    	      ($(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('fadeindiv-hide')) && 
    	       $(this).removeClass('fadeindiv-hide').addClass('fadeindiv-show');
    	  });
      }
      
      //hide timeline blocks which are outside the viewport
  	  hideBlocks(blox, offset);
  	  
  	  // define scroll handler to show blocks as they come into view
  	  $(window).on('scroll', function() {
    	  (!window.requestAnimationFrame) 
    	    ? setTimeout(function(){ showBlocks(blox, offset); }, 100)
    	    : window.requestAnimationFrame(function(){ showBlocks(blox, offset); });
      });
    }
  };
}) (jQuery, Drupal, this, this.document);
