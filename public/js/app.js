// this peace of code needed for library typed.js
let typed = new Typed('#typed', {
stringsElement: '#typed-strings',
typeSpeed: 40,
backSpeed: 0,
});

const fragment = document.createDocumentFragment();


// I add a new method for capitalizing first letter

String.prototype.capitalize = function() 
{
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// create method for creating menu

function newMenuItem ()
{
  // I extract all section in order to  get their ids and then create a menu

  const sections = document.querySelectorAll('section');

  // create menu element with display none 
  const newUl = document.createElement('ul');

  newUl.id = 'menu';

  const menu = document.querySelector('#menuToggle');

  

  for (let i of sections){
    
     // I get id names of sections and create li elements with first name of id. it looks like audit_section. and put it in <ul>
    let regexp = /(.*?)_/;

    let pattern = `<li><a href="#${i.id}">${i.id.match(regexp)[1].capitalize()}</a></li>`;

    if(i.id.match(regexp)[1].capitalize() !=='Footer')
    {
      newUl.insertAdjacentHTML("beforeEnd", pattern);
    }
  }

  menu.appendChild(newUl);
  const anchors = document.querySelectorAll('#menu li a');

  nav  = document.getElementById('menuToggle');

  // I create listeners for links in the menu and making navigation more smooth 
  for(let anchor of anchors)
  {
    anchor.addEventListener('click', function(e)
    {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      nav.classList.toggle('active');

      burger.classList.toggle('is-open');

    document.querySelector(blockID).scrollIntoView
    ({
      behavior: 'smooth',
      block: 'center'
    });
  
  });
}    
}

// I listen when DOM ready
document.addEventListener('DOMContentLoaded', function(event) {
  // I call my function through browser, bypassing stack
  newMenuItem();

// this piece of code for responsive menu
  let burger = document.getElementById('burger'),
  nav  = document.getElementById('menuToggle');

  burger.addEventListener('click', function(e)
    {
      this.classList.toggle('is-open');

      nav.classList.toggle('active');

      document.getElementById('menu').classList.add('smoothie');
      
    });
});

// this checker when you open mobile menu and then make
//a resize to desktop and again resize to mobile it will still open
// with this checker I remove some classes to avoid this behavior
window.addEventListener("resize", function ()
{
  if (window.innerWidth>700)
  {
    document.getElementById('menu').classList.remove('smoothie');

    document.getElementById('burger').classList.remove('is-open');

    document.getElementById('menuToggle').classList.remove('active');
  }
});


// on each scroll event I will call my function and highlight my anchor
  window.addEventListener('scroll', function(e) 
  {

    scroll()
  
  });


// this function help me figure out a viewing screen
function scroll(){
  let sections = document.querySelectorAll('section'); 

  for(let section of sections)
  {
    let top  = section.offsetTop-60;

    let bottom = top +section.offsetHeight;

    let scroll = pageYOffset;

    let id = section.id;

    if( scroll > top && scroll < bottom)
    {
      // I check if there is no requested selector 
      // I will add a 'highlight' class to the current view 
      // If I have this class wherever, I will remove it
      if(document.querySelector('a.highlight'))
      {
        document.querySelector('a.highlight').classList.remove('highlight');

        document.querySelector(`a[href="#${id}"]`).classList.add('highlight');
      }
      else{
        document.querySelector(`a[href="#${id}"]`).classList.add('highlight');
      }
    }
  }
}