let myImage = document.querySelector('img');
let myAudio = document.querySelector('audio');
let x = 0;

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myButton.onclick = function() {

    let mySrc = myImage.getAttribute('src');
    let mySrca = myAudio.getAttribute('src'); 
    
    switch(x)
    {
        case 3:
            {
                myHeading.textContent = 'Assassin\'s Creed Black Flag';
                mySrc = myImage.setAttribute('src','images/aa.png');
                mySrca = myAudio.setAttribute('src','audio/sea.mp3');
                x=0;
            }
            break;
        case 0:   
            {

                myHeading.textContent = 'Assassin\'s Creed Unity';
                myImage.setAttribute('src','images/ab.png');
                mySrca = myAudio.setAttribute('src','audio/unity.mp3');
                x=1;

            } 
            break;
        
        case 1:
            {
                myHeading.textContent = 'The Elder Scroll V : Skyrim';
                myImage.setAttribute('src','images/sk.png');  
                mySrca = myAudio.setAttribute('src','audio/dragonborn.ogg');
                x=2 
            }
            break;

        case 2:
            {
                myHeading.textContent = 'Hitman Absolution';
                myImage.setAttribute('src','images/hitmand.png');
                mySrca = myAudio.setAttribute('src','audio/hitman.mp3');
                x=3;
            }
            break;

    }
}

