
// Image switcher code
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === "images/firefox.jpeg") {
    myImage.setAttribute("src", "images/firefox1.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox.jpeg");
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = ' Mozilla is cool,' +myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = ' Mozilla is cool, ' +storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

