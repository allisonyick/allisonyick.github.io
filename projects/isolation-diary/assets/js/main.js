$(document).mousemove(function(e){
      console.log("follow me!");
      $(".pointer").css({left:e.pageX, top:e.pageY});
    })

$(".preview").removeAttr("controls");

$(".preview").hover(function(event) {
    if(event.type === "mouseenter") {
        $(this).attr("controls", "");
    } else if(event.type === "mouseleave") {
        $(this).removeAttr("controls");
    }
});

$(".next").hover(function(){
  console.log("let's try something new!");
  $(".body-text").css("color", "white");
  $(".heading").css("color", "white");
  $(".name").css("color", "white");
  $(this).css("cursor", "pointer");
  }, function(){
  $(".body-text").css("color", "black");
  $(".heading").css("color", "black");
  $(".name").css("color", "lightgrey");
});

var randomDay = Math.round(Math.random() * 14); 
var randomNextPage = 'day-' + randomDay + '.html';
$('.next-day-link').attr('href', randomNextPage);