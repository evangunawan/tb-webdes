$(document).ready(()=>{

  $('.gal-big').each(function() {
    $(this).on('mouseenter', function() {
      $(this).find('.gal-desc').animate({ opacity: 1 }, 200);
    });

    $(this).on('mouseleave', function() {
      $(this).find('.gal-desc').animate({ opacity: 0 }, 200);
    });
  })
  
});