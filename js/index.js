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
const navbar = document.getElementsByTagName('a');
const contact = navbar[3];

Array.from(navbar).forEach(function(anchor){
    anchor.addEventListener('mousedown', function(){
        anchor.style.color = '#C0C0C0';
    });
});

Array.from(navbar).forEach(function(anchor){
    anchor.addEventListener('mouseup', function(){
        anchor.style.color = '#212529';
    });
});

aboutUs.href = 'https://lambdaschool.com/';
blog.href = 'https://lambdaschool.com/courses/cs/web/';
home.href = 'file:///C:/Users/lesle/Documents/CODE%20PROJECTS/DOM-II/index.html#'

contact.addEventListener('mouseup', event => {
    alert('Contact us here anytime! funbus@email.com');
});


/////////////////////////////////////
// MOUSEOVER & MOUSEOUT for image opacity and logo color
const images = document.getElementsByTagName('img');
Array.from(images).forEach(function(image) {
    image.addEventListener('mouseover', function(){
        image.style.opacity = '0.5';
    });
});
Array.from(images).forEach(function(image) {
    image.addEventListener('mouseout', function(){
        image.style.opacity = '1.0';
    });
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

