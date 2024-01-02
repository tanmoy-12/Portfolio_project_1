const targetDiv1 = document.getElementById("aboutme");
const targetDiv2 = document.getElementById("skills");
const targetDiv3 = document.getElementById("education-details");

let btn1 = document.getElementById("about");
btn1.onclick = function () {
  btn1.style.backgroundColor ="#1f32de";
  targetDiv1.style.display = "block";
  targetDiv2.style.display = "none";
  targetDiv3.style.display = "none";
};

let btn2 = document.getElementById("skill");
btn2.onclick = function () {
  btn1.style.backgroundColor ="#8490ff";
  targetDiv1.style.display = "none";
  targetDiv2.style.display = "block";
  targetDiv3.style.display = "none";
};

let btn3 = document.getElementById("education");
btn3.onclick = function () {
  btn1.style.backgroundColor ="#8490ff";
  targetDiv1.style.display = "none";
  targetDiv2.style.display = "none";
  targetDiv3.style.display = "block";
};

document.addEventListener('DOMContentLoaded', function() {
  const typedTextElement = document.getElementById('typed-text');
  const data = JSON.parse(typedTextElement.getAttribute('data-type'));
  const period = parseInt(typedTextElement.getAttribute('data-period'), 10);

  let index = 0;
  let letterIndex = 0;

  function typeText() {
    if (letterIndex <= data[index].length) {
      typedTextElement.textContent = data[index].substring(0, letterIndex);
      letterIndex++;
      setTimeout(typeText, 100); // Adjust the delay between letters
    } else {
      setTimeout(eraseText, period);
    }
  }

  function eraseText() {
    if (letterIndex >= 0) {
      typedTextElement.textContent = data[index].substring(0, letterIndex);
      letterIndex--;
      setTimeout(eraseText, 30); // Adjust the delay between erased letters
    } else {
      index = (index + 1) % data.length;
      setTimeout(typeText, 300); // Adjust the delay before typing the next text
    }
  }

  setTimeout(typeText, 300); // Adjust the delay before starting the typing animation
});


// Add an event listener to handle the scroll
window.addEventListener('scroll', function() {
  // Get the #second element
  var secondElement = document.getElementById('second');
  
  // Get the position of the #second element relative to the viewport
  var rect = secondElement.getBoundingClientRect();
  
  // Check if the #second element is in the viewport
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Add the hover-effect class if it's in the viewport
      secondElement.classList.add('hover-effect');
  } else {
      // Remove the hover-effect class if it's not in the viewport
      secondElement.classList.remove('hover-effect');
  }
});











