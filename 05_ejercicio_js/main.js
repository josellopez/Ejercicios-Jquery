$("document").ready(function(){

    $("h1").show();
    $("img").hide();

});

$(document).on("click", function(){

    $("h1").hide();
    $("img").show();
});

$("img").hover(function(){

    $(this).css("width", "300");

}, function(){  

    $(this).css("width", "250");

});

