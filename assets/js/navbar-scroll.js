(() => {
  $(window).on("scroll", ()=>{
    if($(window).scrollTop() > 50){
      $("#navbar").addClass("bg-dark");
    }else {
      $("#navbar").removeClass("bg-dark");
    }
  })
})();