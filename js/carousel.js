//make your big variables
const track = document.querySelector('.carousel__track'); // the UL class
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav'); //contains nav direct select buttons
const dots = Array.from(dotsNav.children); //array from the direct select buttons

const slideWidth = slides[0].getBoundingClientRect().width;

//this will place the navigation dots from JS.

var dotsArray = [];
for (i = 0; i < slides.length; i++) {
    var navButton = document.createElement('button');
    navButton.classList.add('carousel__indicator');
    dotsNav.appendChild(navButton);
    dotsArray.push(navButton);
}
//const navButtonArray = Array.from(dotsNav.children);
//navButtonArray[0].classList.add('current-slide');
dotsArray[0].classList.add('current-slide');

//arrange size next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

//controls slide direct movement from slide to slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }
    //when you are at the extreme position left or right remove one arrow
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


//when I click left move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    //this calls movement function to the exact 'prevSlide'
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);

    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})


//when I click right - move to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //this calls movement function to the exact 'nextSlide'
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

//when I click navigation dot indicators- move to that slide
dotsNav.addEventListener('click', e => {
        //what indicator was clicked on?
        const targetDot = e.target.closest('button');

        if (!targetDot) return; //if I don't click a dot- then exit out the function
        //if I click on the button- do the rest of this code

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dotsArray.findIndex(dot => dot === targetDot)
        const targetSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, targetSlide);

        updateDots(currentDot, targetDot);

        hideShowArrows(slides, prevButton, nextButton, targetIndex);
    })
    //I had to make a new dotsArray filled with the JS component items because
    //the html items were no longer in the area to be detected. Then I changed
    //the targetIndex from dots to dotsArray (because dots was now empty)...
    //I still don't see why dots was empty- the div was filled with items that
    //JS created. This may be an issue of order of operations.