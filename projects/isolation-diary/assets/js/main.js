$(".preview").removeAttr("controls");

$(".preview").hover(function(event) {
    if(event.type === "mouseenter") {
        $(this).attr("controls", "");
    } else if(event.type === "mouseleave") {
        $(this).removeAttr("controls");
    }
});