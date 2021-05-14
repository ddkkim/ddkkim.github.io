/*var card = document.querySelector('.card');*/
var cards = document.querySelectorAll('.card');
cards.forEach( function(currentValue){
  currentValue.addEventListener( 'click', function() {
    currentValue.classList.toggle('is-flipped');
  })
}
)

function hideall() {
  cards.forEach( 
    function(currentValue){
      currentValue.classList.toggle('hidden');
    }
  )
}

function addClickEvent(elements){
  elements.forEach( function(currentValue){
    currentValue.addEventListener( 'click', hideall) 
  }
  )
}

var btns = document.querySelectorAll('.btn');
var modalbgs = document.querySelectorAll('.modal__bg');
var modalcls = document.querySelectorAll('.modal__close');

addClickEvent(btns);
addClickEvent(modalbgs);
addClickEvent(modalcls);