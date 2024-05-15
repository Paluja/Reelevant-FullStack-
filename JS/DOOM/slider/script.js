const slContainer = document.querySelector('.sl-container');
const slItem = document.querySelector('.slide');
const slPrev = document.querySelector('#left-btn');
const slNext = document.querySelector('#right-btn');

slNext.addEventListener('click', (e) => {
    const itemWidth = slItem.clientWidth;
    slContainer.scrollLeft += itemWidth;
    slNext.disabled = true;
    setTimeout(() => {
        slNext.disabled = false;
    }, 500);
    
    // if(isScrolling === true){
    //     console.log(isScrolling);
    //     slNext.disabled = true;
    //     isScrolling = false;
    //     console.log(isScrolling);
    // }
    // console.log(isScrolling);
});
// console.log(isScrolling);

// console.log(isScrolling);

slPrev.addEventListener('click', (e) => {
    const itemWidth = slItem.clientWidth;
    slContainer.scrollLeft -= itemWidth;
    slPrev.disabled = true;
    setTimeout(() => {
        slPrev.disabled = false;
    }, 500);
});