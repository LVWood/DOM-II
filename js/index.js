// Your code goes here
//  @Joe: one big problem, this code is definately not DRY. But as I understand it, we were discouraged from using for loops on event listeners. Is that correct? It seems like there must be a much more efficient way to streamline like-processes across similar elements.


/*10 event types used: 
    mousedown
    mouseup
    mouseover
    mouseout
    click
    keyup
    input
    focusin
    blur
    contextmenu
*/

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
    event.preventDefault();
});
home.addEventListener('mouseup', event => {
    home.style.color = '#212529';
});
aboutUs.addEventListener('mousedown', event => {
    aboutUs.style.color = '#C0C0C0';
    event.preventDefault();
});
aboutUs.addEventListener('mouseup', event => {
    aboutUs.style.color = '#212529';
});
blog.addEventListener('mousedown', event => {
    blog.style.color = '#C0C0C0';
});
blog.addEventListener('mouseup', event => {
    blog.style.color = '#212529';
    event.preventDefault();
});
contact.addEventListener('mousedown', event => {
    contact.style.color = '#C0C0C0';
}); 
contact.addEventListener('mouseup', event => {
    contact.style.color = '#212529';
    event.preventDefault();
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
    event.stopPropagation();
});
busImg.addEventListener('mouseout', event => {
    //console.log('we have hover');
    busImg.style.opacity = '1.0';
});

const adventureImg = document.querySelector('.image-adventure');
adventureImg.addEventListener('mouseover', event => {
    // console.log('we have hover');
    adventureImg.style.opacity = '0.5';
    event.stopPropagation();
});
adventureImg.addEventListener('mouseout', event => {
    //console.log('we have hover');
    adventureImg.style.opacity = '1.0';
});

const canalImg = document.querySelector('.canal-image');

canalImg.addEventListener('mouseover', event => {
    //console.log('we have hover');
    canalImg.style.opacity = '0.5';
    event.stopPropagation();
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
const signMeUpFun= buttons[0];
const signMeUpMountains = buttons[1];
const signMeUpIsland = buttons[2];

buttons.forEach(function(button) {
    button.addEventListener('click', function(){
        button.style.backgroundColor = '#C0C0C0';
    });
});

//////////////////////////////////////////////////
// KEYUP, INPUT, FOCUSIN, BLUR for forms
function keyup(){
    console.log(event.key);
};
function focusin(){
    event.target.style.background = '#FFEBCD';
};
function blur(){
    event.target.style.background = '#FFFFFF';
};

const funFormName = document.querySelector('#funForm .formName');
const funFormEmail = document.querySelector('#funForm .formEmail');

funFormName.addEventListener('keyup', keyup);
funFormName.addEventListener('focusin', focusin, true);
funFormName.addEventListener('blur', blur, true);
funFormEmail.addEventListener('keyup', keyup);
funFormEmail.addEventListener('focusin', focusin, true);
funFormEmail.addEventListener('blur', blur, true);

const mountainFormName = document.querySelector('#mountainForm .formName');
const mountainFormEmail = document.querySelector('#mountainForm .formEmail');

mountainFormName.addEventListener('keyup', keyup);
mountainFormName.addEventListener('focusin', focusin, true);
mountainFormName.addEventListener('blur', blur, true);
mountainFormEmail.addEventListener('keyup', keyup);
mountainFormEmail.addEventListener('focusin', focusin, true);
mountainFormEmail.addEventListener('blur', blur, true);

const islandFormName = document.querySelector('#islandForm .formName');
const islandFormEmail = document.querySelector('#islandForm .formEmail');

islandFormName.addEventListener('keyup', keyup);
islandFormName.addEventListener('focusin', focusin, true);
islandFormName.addEventListener('blur', blur, true);
islandFormEmail.addEventListener('keyup', keyup);
islandFormEmail.addEventListener('focusin', focusin, true);
islandFormEmail.addEventListener('blur', blur, true);

/////////////////////////////
// CONTEXTMENU on container

const body = document.querySelector('body');
body.addEventListener('contextmenu', event => {
    alert('can I help you?');
});

