// Code for Login Function.
var counter = 2;
function login(){
if(counter % 2 == 0){
    alert('You Have Logged In!');
} else {
    alert('You Have Logged Out!');
}

counter +=1;
}

// Code for Project Cards.
var base = document.querySelector('#ProjectCards');
var selector = '.card__inner';

base.addEventListener('click', function(event) {
  let closest = event.target.closest(selector);
    if (closest && base.contains(closest)) {
    closest.classList.toggle('is-flipped');
  }
});