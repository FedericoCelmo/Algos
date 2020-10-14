$(document).on('turbolinks:load',function() {
 
    // checkDivWidth960px();
    // checkDivWidth560px();
    // $(window).resize(checkDivWidth960px, checkDivWidth560px);
  });
  
  
  $(".slide-down-location-menu, .paisley-central-info, .ralston-info, .slide-down-menu").hide();
  
  $(".paisley-central-header").click(function() {
    
    if ( $(".paisley-central-info").is(":visible")) {
      
      $(".slide-down-location-menu").slideUp(); 
    }
     
    else {
      $(".ralston-info").hide();
      $(".paisley-central-info").show();
      $(".slide-down-location-menu").slideDown();}
  });
  
  $(".ralston-header").click(function() {
    
    if ( $(".ralston-info").is(":visible")) {
      
      $(".slide-down-location-menu").slideUp(); 
    }
     
    else {
      $(".paisley-central-info").hide();
      $(".ralston-info").show();
      $(".slide-down-location-menu").slideDown();}
  });
  
  
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
  
  
  function checkDivWidth560px(){
    if ($(".locations-header").width() < 560 ){
  
      $(".locations-header a:nth-child(1)").click(function(){
        $(".locations-header a:nth-child(2)").removeClass("ralston-header-mobile-clicked");
        $(".locations-header a:nth-child(2)").addClass("ralston-header");
        $(this).toggleClass("paisley-central-header");
        $(this).toggleClass("paisley-central-header-mobile-clicked");
      });
      $(".locations-header a:nth-child(2)").click(function(){
        $(".locations-header a:nth-child(1)").removeClass("paisley-central-header-mobile-clicked");
        $(".locations-header a:nth-child(1)").addClass("paisley-central-header");
        $(this).toggleClass("ralston-header");
        $(this).toggleClass("ralston-header-mobile-clicked");
      });
    }
  }
  
  
  
  
  
  
  