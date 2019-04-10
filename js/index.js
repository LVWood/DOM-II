// Your code goes here

///////////////////////////////////////
//MOUSEDOWN & MOUSEUP for navbar
const navbar = document.querySelectorAll('a');
const home = navbar[0];
const aboutUs = navbar[1];
const blog = navbar[2];
const contact = navbar[3];

aboutUs.href = 'https://lambdaschool.com/';
blog.href = 'https://lambdaschool.com/courses/cs/web/';
home.href = 'file:///C:/Users/lesle/Documents/CODE%20PROJECTS/DOM-II/index.html#'

home.addEventListener('mousedown', event => { 
    home.style.color = '#C0C0C0';
});
home.addEventListener('mouseup', event => {
    home.style.color = '#212529';
});
aboutUs.addEventListener('mousedown', event => {
    aboutUs.style.color = '#C0C0C0';
});
aboutUs.addEventListener('mouseup', event => {
    aboutUs.style.color = '#212529';
});
blog.addEventListener('mousedown', event => {
    blog.style.color = '#C0C0C0';
});
blog.addEventListener('mouseup', event => {
    blog.style.color = '#212529';
});
contact.addEventListener('mousedown', event => {
    contact.style.color = '#C0C0C0';
}); 
contact.addEventListener('mouseup', event => {
    contact.style.color = '#212529';
});  
contact.addEventListener('mouseup', event => {
    alert('Contact us here anytime! funbus@email.com');
});


/////////////////////////////////////
// MOUSEOVER & MOUSEOUT for image opacity and logo color
const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseover', event => {
    //console.log('we have hover');
    busImg.style.opacity = '0.5';
});
busImg.addEventListener('mouseout', event => {
    //console.log('we have hover');
    busImg.style.opacity = '1.0';
});

const adventureImg = document.querySelector('.image-adventure');
adventureImg.addEventListener('mouseover', event => {
    // console.log('we have hover');
    adventureImg.style.opacity = '0.5';
});
adventureImg.addEventListener('mouseout', event => {
    //console.log('we have hover');
    adventureImg.style.opacity = '1.0';
});

const canalImg = document.querySelector('.canal-image');
console.log(canalImg);

canalImg.addEventListener('mouseover', event => {
    console.log('we have hover');
    canalImg.style.opacity = '0.5';
});
canalImg.addEventListener('mouseout', event => {
    //console.log('we have hover');
    canalImg.style.opacity = '1.0';
});

const headLogo = document.querySelector('.logo-heading');
headLogo.addEventListener('mouseover', event => {
    headLogo.style.color = 'gold';
});
headLogo.addEventListener('mouseout', event => {
    headLogo.style.color = 'black';
});

///////////////////////////////////////////////
// CLICK for buttons

const buttons = document.querySelectorAll('.destination .btn');
const signMeUpFun = buttons[0];
const signMeUpMountains = buttons[1];
const signMeUpIsland = buttons[2];

signMeUpFun.addEventListener('click', event => {
    signMeUpFun.style.backgroundColor = '#C0C0C0';
});
signMeUpMountains.addEventListener('click', event => {
    signMeUpMountains.style.backgroundColor = '#C0C0C0';
});
signMeUpIsland.addEventListener('click', event => {
    signMeUpIsland.style.backgroundColor = '#C0C0C0';
});


const contentHeaders = document.querySelector('.text-content h2');



