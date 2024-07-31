let themebutton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

}

themebutton.addEventListener("click", toggleDarkMode);

const form = document.getElementById('sign-petition');
const resultDiv = document.getElementById('result');
let count = 3;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  
  let containsErrors = false;
  const petitionInputs = document.getElementById('sign-petition').elements;

for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
      console.log('error!');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  const name = document.getElementById('name');
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(name.value)) {
    name.classList.add('error');
    containsErrors = true;
    console.log('invalid name');
  } else {
    name.classList.remove('error');
  }


  const email = document.getElementById('email');
  if (!email.value.includes('@') || !email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
    console.log('invalid email');
  } else {
    email.classList.remove('error');
  }

  

  if (containsErrors) {
    return;
  }

 
  const hometown = document.getElementById('hometown').value;
  const counter = document.getElementById('counter');
  const result = document.createElement('p');

  result.innerHTML = '🖊️ ' + name.value + ' from ' + hometown + ' supports this.';

  resultDiv.appendChild(result);
  count++;
  counter.innerHTML = '🖊️ ' + count + ' people have signed this petition and support this cause.';
});

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}

const revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
for (let i = 0; i < revealableContainers.length; i++){
  let windowHeight = window.innerHeight;
  let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
  if(topOfRevealableContainer < windowHeight - animation.revealDistance){
    revealableContainers[i].classList.add('active');
  } else{
    revealableContainers[i].classList.remove('active');
  }
  
}
}

window.addEventListener('scroll', reveal);

const reduceMotionBtn = document.getElementById('reduce-motion-btn');



function reduceMotion() {
 
  animation.revealDistance = 20;
  animation.revealDuration = '0s';
  animation.revealTimingFunction = 'none';

  
  for (let i = 0; i < revealableContainers.length; i++) {
   
    revealableContainers[i].style.transition = `transform ${animation.revealDuration} ${animation.revealTimingFunction}, opacity ${animation.revealDuration} ${animation.revealTimingFunction}`;
    revealableContainers[i].style.transform = `translateY(0px)`; 
    revealableContainers[i].style.opacity = `1`; 
  }
}

reduceMotionBtn.addEventListener('click', reduceMotion);

function toggleModal 