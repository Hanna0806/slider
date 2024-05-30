const sliderWrapper = document.querySelector('.slider__container');
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('img');
const dots = document.querySelectorAll('.slider__dot');
const nextBtn = document.querySelector('.slider__next-btn');
const prevtBtn = document.querySelector('.slider__prev-btn');


// transform: translate(-800px)
// offsetWidth  - включает бордер (почитать в ljs)
// clientWidth


// let width = sliderWrapper.clientWidth
// console.log(width);
//  function setWidthLine() - чтобы вручную не писать ширину 

let orderImg = 0
let width

function setWidthLine() {
    width = sliderWrapper.offsetWidth
    sliderLine.style.width =  width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'
    })
    console.log('width', width);
    console.log(sliderLine.style.width);
}

window.addEventListener('resize', setWidthLine)
setWidthLine()



nextBtn.addEventListener('click', function() {
    orderImg++
    if(orderImg > images.length - 1) {
        orderImg = 0
    }
    const value = orderImg * width
    sliderLine.style.transform = `translate(-${value}px)`
    
} )

prevtBtn.addEventListener('click', function() {
    orderImg--
    if(orderImg < 0) {
        orderImg = images.length - 1
    }
    scrollSlider ()
} )

function scrollSlider () {
    const value = orderImg - width
    sliderLine.style.transform = `translate(-${value}px)`
}