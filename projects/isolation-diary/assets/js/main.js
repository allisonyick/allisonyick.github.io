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
  $(".random").css("color", "black");
  $(".random").css("transition", "0.5s ease-in-out");
  $(this).css("border-bottom", "7vw solid snow");
  $(this).css("cursor", "pointer");
  $(this).css("transition", "0.5s ease-in-out");
  }, function(){
  $(".random").css("color", "white");
  $(this).css("border-bottom", "7vw solid black");
});

$(".next").hover(function(){
  console.log("let's try something new!");
  $(".random").css("color", "black");
  $(".random").css("transition", "0.5s ease-in-out");
  $(this).css("border-bottom", "7vw solid snow");
  $(this).css("cursor", "pointer");
  $(this).css("transition", "0.5s ease-in-out");
  }, function(){
  $(".random").css("color", "white");
  $(this).css("border-bottom", "7vw solid black");
});

$('video').on('click', function(){
  console.log("enjoy the video!");
  $('.left').css({'background-color': 'black', 
                  'transition': '1s ease-in-out'});
  $('.view').css('border', '0.2vw solid black');
  $('.selected').css('border', '0.2vw solid snow');
  $('a').css('color', 'snow');
  $('.toggle').css('color', 'snow');
  $('.note').css('display', 'none');
});

var randomDay = Math.round(Math.random() * 13); 
var randomNextPage = 'day-' + randomDay + '.html';
$('.next-day-link').attr('href', randomNextPage);