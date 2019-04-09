// Your code goes here
const headLogo = document.querySelector('.logo-heading');
headLogo.addEventListener('mouseover', event => {
    headLogo.style.color = 'gold';
});
headLogo.addEventListener('mouseout', event => {
    headLogo.style.color = 'black';
});

navHome = document.querySelector('.nav a');

navHome.addEventListener('click', event => {
    navHome.style.color = 'yellow';
});
navHome.addEventListener('dblclick', event => {
    navHome.style.color = 'black';
});

const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseover', event => {
    //console.log('we have hover');
    busImg.style.opacity = '0.5';
    event.stopPropagation();
});
busImg.addEventListener('mouseout', event => {
    //console.log('we have hover');
    busImg.style.opacity = '1.0';
    event.stopPropagation();
});


const destinationHeaders = document.querySelector('.destination h4');

const signMeUp = document.querySelector('.destination .btn');
// console.log(signMeUp);
signMeUp.addEventListener('click', event => {
    prompt('Please enter your email address', '');
    console.log('');
})

const contentHeaders = document.querySelector('.text-content h2');

const contentImg2 = document.querySelector('.img-fluid-rounded');

// const headLogo = document.querySelector('.logo-heading');

// const headLogo = document.querySelector('.logo-heading');

// const headLogo = document.querySelector('.logo-heading');
//[ ] `keydown`