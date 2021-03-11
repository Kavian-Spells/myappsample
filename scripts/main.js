let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Badge Photo (3).jpg') {
      myImage.setAttribute('src','images/sphinx.jpg');
    } else {
      myImage.setAttribute('src','images/Badge Photo (3).jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Hi ${myName}, Meet Kavian!`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', Meet Kavian!';
  }

  myButton.onclick = function() {
    setUserName();
  }