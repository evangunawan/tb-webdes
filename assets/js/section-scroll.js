$(function(){
    $.scrollify({
        section : "section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1000,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {
            currentSection = $.scrollify.current();
            if(currentSection[0].className.includes("section-video")){
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
