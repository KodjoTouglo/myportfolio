$(document).ready(function(){
    var bottom=$("header").outerHeight();
    var header=$("header").offset().top + bottom;
 $(window).scroll(function(){
      // header fixed only when window width greater than 991px
     if($(window).width()>991){
     if($(window).scrollTop()>=header){
         $("header").addClass("sticky")
     }
     else{
      $("header").removeClass("sticky")	
     }
 }
 })

 // navbar active link

 $(".navbar ul li a").click(function(){
      $(".navbar ul li a").removeClass("active")
      $(this).addClass("active");
 })

$(".ham-burger").click(function(){
    $(this).toggleClass("active")
    $(".navbar").toggleClass("open");
})

})