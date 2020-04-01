let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc= myImage.getAttribute('src');
    if ( mySrc == 'images/aa.png') {
        myImage.setAttribute('src','images/ab.png');
    }
    else{
        mySrc = myImage.setAttribute('src','images/aa.png');

}

}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null)
    {
     setUserName();   
    }    

    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Assassin ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Assassin ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }