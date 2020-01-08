let clickable = true;
let active = null;
let newActive = null;
  
document.addEventListener('DOMContentLoaded', () => {
  const SLIDETIME = 500; //ms
  const allSlides = [...document.querySelectorAll('.article-slide')];
  // const backButton = document.querySelector('.article-slider-back-btn');
  // const forwardButton = document.querySelector('.article-slider-next-btn');
  

  function initSlider() {
    // Set the CSS transition on the slides to the value we specified in SLIDETIME above
    allSlides.forEach(slide =>
      slide.setAttribute(
        'style',
        `transition: transform ${SLIDETIME}ms ease;
                     animation-duration: ${SLIDETIME}ms`,
      ),
    );
  }
  
  allSlides.forEach(slide => {
    slide.addEventListener('transitionend', e => {
       if (slide === active && !clickable) {
        clickable = true;
        active.className = 'article-slide';
      }
    });
  });

  // Init the slider
  initSlider();
 
});

function autoPlaySlider() {
  setInterval(function(){
      // console.log('say hello')
      changeSlide(true); }, 3000);
}

function changeSlide(forward) {
  if (clickable) {
    clickable = false;
    active = document.querySelector('.active');
    const activeSlideIndex = allSlides.indexOf(active);

    if (forward) {
      // console.log('activeSlideIndex: ', activeSlideIndex);
      // console.log('allSlides.length: ', allSlides.length);
      // console.log('new slide: ', (activeSlideIndex + 1) % allSlides.length);

      newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
      active.classList.add('slideOutLeft');
      newActive.classList.add('slideInRight', 'active');
    } else {
      // console.log('activeSlideIndex: ', activeSlideIndex);
      // console.log('allSlides.length: ', allSlides.length);
      // console.log('new slide: ', (activeSlideIndex - 1 + allSlides.length) % allSlides.length);

      newActive =
        allSlides[
          (activeSlideIndex - 1 + allSlides.length) % allSlides.length
        ];
      active.classList.add('slideOutRight');
      newActive.classList.add('slideInLeft', 'active');
    }
  }
}