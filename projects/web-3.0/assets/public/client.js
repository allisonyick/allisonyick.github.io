// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {

  $("form").hide();
  $(".key-content").hide();

  $(".add-text").click(function() {
    $("form").toggle();
  });

  $(".view-key").click(function() {
    $(".key-content").toggle();
  });

  $.get("/messages", function(messages) {
    messages.forEach(function(message) {
      $("body").append("<div class='item'>" + message[0] + "</div>");
      $(messages).addClass("item");
    });
  });

  $("form").submit(function(event) {
    event.preventDefault();
    var messageText = $("input#messageText").val();
    $.post("/messages?" + $.param({ messageText: messageText }), function() {
      $("body").append("<div class='item'>" + messageText + "</div>");
      $("input#messageText").val("");
      $("input").focus();
    });
  });

  $(function() {
    $(".item").draggable();
  });

  //  $('form').bind('mousemove',function(ev){
  // obj.animate({top:ev.pageY,left:ev.pageX},{queue:false,duration:200,easing:'linear'})});
});
