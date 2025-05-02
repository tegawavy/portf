

const phrases = [
    "Building Websites that Don’t Just Look Good, They Perform.",
    "Where Creativity Meets Code – Custom Websites Tailored to Your Vision.",
    "Empowering Your Business with High-Impact Websites that Convert Visitors into Customers.",
    "Turning Your Ideas into Interactive Digital Solutions – Designed for Performance.",
    "Crafting User-Friendly Websites That Tell Your Story and Drive Success.",
    "Transforming Brands Through Bold, Functional Websites That Get Results."
];

let currentPhraseIndex = 0; 

function changeText() {
    const h1 = document.getElementById('dynamicText');
    h1.textContent = phrases[currentPhraseIndex];
    
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

changeText();

setInterval(changeText, 10000);


const heading = document.querySelector('.animated-heading');
const section = document.querySelector('.section');


function checkScroll() {
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  

  if (sectionTop < window.innerHeight && sectionBottom >= 0) {
    heading.classList.add('active');
  } else {
    heading.classList.remove('active');
  }
}


window.addEventListener('scroll', checkScroll);


checkScroll();
