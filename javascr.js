$('nav').addClass('push-down-menu').wrap('<div class="push-down-menu-container">').append('<div id="push-menu"></div>');

$('.menu-level-2').wrapInner('<div class="inner"></div>');

// hide sub-menus
$('.menu-level-2').hide();

$('#push-menu .menu-level-2 .inner').hide();