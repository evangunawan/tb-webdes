const track = document.querySelector('.carousel_track');
const slides=Array.from(track.children);
const dotsNav = document.querySelector('.carousel_nav');
const dots =Array.from(dotsNav.children);

const slideWidth=slides[0].getBoundingClientRect().width;

//arrange the slide next to one another
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//ketika di click kanan maka akan bergerak ke kanan
//ketika di click kiri maka akan bergerak ke kiri
//move untuk slide
const moveToSlide =(track, currentSlide, targetSlide)=>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
//indicator
dotsNav.addEventListener('click', e =>{
  //what indicator was clicked on?
    const targetDot = e.target.closest('button');
    
    console.log(e.target)
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
})
function loopSlide(){
    
}