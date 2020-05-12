/*$(document).ready(function(){
    var slideNum = $(".allPages").length,
    wrapperWidth = 100 * slideNum,
    slideWidth = 100 / slideNum;

    $(".wrapper").width(wrapperWidth + "%");
    $(".allPages").width(slideWidth + "%");

    $("a.scrollitem").click(function(){
        $("a.scrollitem").removeClass("selected");
        $(this).addClass("selected");

        var slideNumber = $($(this).attr("href")).index(".allPages"),
            margin = slideNumber * -100 + "%";

        $(".wrapper").animate({
            marginLeft: margin
        },1000);
        return false;
    });
})*/
