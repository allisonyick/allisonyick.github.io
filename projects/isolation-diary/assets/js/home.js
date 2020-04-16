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

$(".homelink").hover(function(){
  console.log("have fun trying out the instructions!");
  $(".right").css("background-color", "black");
  $(this).css("color", "snow");
  }, function(){
  $(".right").css("background-color", "white");
  $(this).css("color", "black");
});

$(".title").hover(function(){
  console.log("have fun trying out the instructions!");
  $(".left").css("background-color", "black");
  $(this).css("color", "snow");
  }, function(){
  $(".left").css("background-color", "white");
  $(this).css("color", "black");
});

var randomDay = Math.round(Math.random() * 13); 
var randomNextPage = 'day-' + randomDay + '.html';
$('.next-day-link').attr('href', randomNextPage);