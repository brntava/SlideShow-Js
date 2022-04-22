
let totalSlides = document.querySelectorAll('.slide-item').length;
let currentSlide = 0;

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`;

document.querySelector('.slider-controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`

// 

const next = () =>{
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin();
}

const prev = () => {
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1; // ultimo slide
    }
    updateMargin();
}

const updateMargin = () => {
    let sliderWidth = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}

setInterval(next, 2000)









