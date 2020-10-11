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
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery 
//= require jquery_ujs 
//= require app
//= require home

console.log('Hello from application.js')
function menu() {

  

  console.log('Se ha ejecutado menu')
  $(document).on('turbolinks:load',function() {
 
    checkDivWidth960px();
    checkDivWidth560px();
    $(window).resize(checkDivWidth960px, checkDivWidth560px);
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
   
  
  //========== For Media Queries ==========
  
  function checkDivWidth960px(){
    if ($(".locations-header").width() < 960 ){
  
      $(".slide-down-menu li").hide();
   
      $(".slide-down-menu ul:nth-child(1) h2").click(function(){
        $(".slide-down-menu ul:nth-child(1) li").toggle();
        $(".slide-down-menu ul:nth-child(2) li").hide();
        $(".slide-down-menu ul:nth-child(3) li").hide();
        $(".slide-down-menu ul:nth-child(4) li").hide();
      });
      $(".slide-down-menu ul:nth-child(2) h2").click(function(){
        $(".slide-down-menu ul:nth-child(2) li").toggle();
        $(".slide-down-menu ul:nth-child(1) li").hide();
        $(".slide-down-menu ul:nth-child(3) li").hide();
        $(".slide-down-menu ul:nth-child(4) li").hide();
      });
      $(".slide-down-menu ul:nth-child(3) h2").click(function(){
        $(".slide-down-menu ul:nth-child(3) li").toggle();
        $(".slide-down-menu ul:nth-child(1) li").hide();
        $(".slide-down-menu ul:nth-child(2) li").hide();
        $(".slide-down-menu ul:nth-child(4) li").hide();
      });
      $(".slide-down-menu ul:nth-child(4) h2").click(function(){
        $(".slide-down-menu ul:nth-child(4) li").toggle();
        $(".slide-down-menu ul:nth-child(1) li").hide();
        $(".slide-down-menu ul:nth-child(2) li").hide();
        $(".slide-down-menu ul:nth-child(3) li").hide();
      });
    }
  }
   
}
  
  
  