
/*
 * Aid debugging TB Megamenu by doubleclicking to keep the menu open
 */

$(".tb-megamenu-item.dropdown .mega-dropdown-menu").dblclick(function() {
  $(this).closest('.tb-megamenu-item').toggleClass('debug');
});

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".tb-megamenu .mega.debug > .mega-dropdown-menu { display: block !important }";
document.body.appendChild(css);






