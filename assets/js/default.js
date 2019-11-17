$('.modal-close').click(()=>{
  $('.modal').fadeOut(200);
  window.location.href = 'index.html';
});
function sendMessage(){
  $('.modal').fadeIn(200);

}