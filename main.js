const targetDiv1 = document.getElementById("aboutme");
const targetDiv2 = document.getElementById("skills");
const targetDiv3 = document.getElementById("education-details");

let btn1 = document.getElementById("about");
btn1.onclick = function () {
  targetDiv1.style.display = "block";
  targetDiv2.style.display = "none";
  targetDiv3.style.display = "none";
};

let btn2 = document.getElementById("skill");
btn2.onclick = function () {
  targetDiv1.style.display = "none";
  targetDiv2.style.display = "block";
  targetDiv3.style.display = "none";
};

let btn3 = document.getElementById("education");
btn3.onclick = function () {
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