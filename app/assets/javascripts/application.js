// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require app
//= require home
//= require rails-ujs
//= require activestorage

$(document).ready(function() {
    $(".hamburger-menu").click(function() {
        if ($(".one").hasClass("one-rotate")) { // try .hasCLass
            $(".one").addClass("one-rotate-back").removeClass("one-rotate");
        } else {
            $(".one").addClass("one-rotate").removeClass("one-rotate-back");
        }

        if ($(".three").hasClass("three-rotate")) {
            $(".three").addClass("three-rotate-back").removeClass("three-rotate");
        } else {
            $(".three").addClass("three-rotate").removeClass("three-rotate-back");
        }
        $(".slide-down-menu").slideToggle();
        $(".two").toggleClass("hide", 300);
    });

    $(".slide-down-menu").hide();

    $(".header-logo-hidden").hide();
    $(".header-logo").mouseenter(function() {
        $(this).hide();
        $(".header-logo-hidden").show();
    });
    $(".header-logo-hidden").mouseleave(function() {
        $(this).hide();
        $(".header-logo").show();
    });

    $('.custom-dropdown a:first').hover(function () {
        if ($('.custom-dropdown-content').is(':visible')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    $('.custom-dropdown-content').hover(function () {
        $('.custom-dropdown a:first').addClass('active');
    }, function () {
        $('.custom-dropdown a:first').removeClass('active');
    });

    setCustomWidth();
    $(window).resize(function () {
        setCustomWidth();
    });
});

function setCustomWidth() {
    var distanceWithTop = $('.slide-down-menu').height();
    $('.custom-dropdown-content').css('margin-top', distanceWithTop);
}
  
  
  