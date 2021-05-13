/*var card = document.querySelector('.card');*/
var cards = document.querySelectorAll('.card');
cards.forEach( function(currentValue){
  currentValue.addEventListener( 'click', function() {
    currentValue.classList.toggle('is-flipped');
  })
}
)
