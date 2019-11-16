$(function(){
    $.scrollify({
        section : ".tech-section-content",
        // sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 800,
        offset : 0,
        scrollbars : false,
        standardScrollElements: "",
        setHeights: true,
        before:function() {
            currentSection = $.scrollify.current();
            if(currentSection[0].className.includes("section-transparent")){
                $("#navbar").addClass('navbar-transparent');
            } else {
                $("#navbar").removeClass('navbar-transparent');
            }
        },
        after:function() {
        },
        afterResize:function() {},
        afterRender:function() {}
    });
});
