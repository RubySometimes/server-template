/**
 * The JavaScript behind the Hamburger Menu
 *
 * JQuery dependency*
 *
 * @author RubyGuy (GitHub)
 * @date September 24, 2017
 */

'use strict';

// constants
const menu = $('#hamburger-menu');

// variables
var showing = false;

// collapse the hamburger-menu when not mobile
$(document).ready(function() {
    $(window).resize(function() {
        menu.addClass('hide');
        showing = false;
    });
});

// call this in HTML to display
function showHamburgerMenu() {
    menu.toggleClass('hide', showing);
    showing = !showing;
}