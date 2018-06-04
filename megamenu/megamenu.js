
// TBMegaMenu debug helper
$(".tb-megamenu-item.dropdown .mega-dropdown-menu").dblclick(function() {
    	  $(this).closest('.tb-megamenu-item').toggleClass('debug');
});
$('body').append("<style id=\"tbmegadebug\">.tb-megamenu .mega.debug > .mega-dropdown-menu { display: block !important;}</style>");

