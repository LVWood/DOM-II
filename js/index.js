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
//////////////////////////////////////////////////
// KEYUP, INPUT, FOCUSIN, BLUR for forms
const funFormName = document.querySelector('#funForm .formName');
const funFormEmail = document.querySelector('#funForm .formEmail');

funFormName.addEventListener('keyup', event => {
    console.log(event.key);
});
funFormName.addEventListener('focusin', (event) => {
    event.target.style.background = '#FFEBCD';
}, true);
funFormName.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

funFormEmail.addEventListener('keyup', event => {
    console.log(event.key);
});
funFormEmail.addEventListener('focusin', (event) => {
    event.target.style.background = '#FFEBCD';
}, true);
funFormEmail.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);


const mountainFormName = document.querySelector('#mountainForm .formName');
const mountainFormEmail = document.querySelector('#mountainForm .formEmail');

mountainFormName.addEventListener('input', event => {
    console.log(event.srcElement.value);
});
mountainFormName.addEventListener('focusin', (event) => {
    event.target.style.background = '#FFEBCD';
}, true);
mountainFormName.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

mountainFormEmail.addEventListener('input', event => {
    console.log(event.srcElement.value);
});
mountainFormEmail.addEventListener('focusin', (event) => {
    //console.log('this is focused');
    event.target.style.background = '#FFEBCD';
}, true);
mountainFormEmail.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);


const islandFormName = document.querySelector('#islandForm .formName');
const islandFormEmail = document.querySelector('#islandForm .formEmail');

islandFormName.addEventListener('keydown', event => {
    console.log(event.key);
});
islandFormName.addEventListener('focusin', (event) => {
    //console.log('this is focused');
    event.target.style.background = '#FFEBCD';
}, true);
islandFormName.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

islandFormEmail.addEventListener('keydown', event => {
    console.log(event.key);
});
islandFormEmail.addEventListener('focusin', (event) => {
    //console.log('this is focused');
    event.target.style.background = '#FFEBCD';
}, true);
islandFormEmail.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

/////////////////////////////
// CONTEXTMENU on container

const body = document.querySelector('body');
body.addEventListener('contextmenu', event => {
    alert('can I help you?');
});

