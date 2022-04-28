(function() {


'use strict'

const $msgFirst = document.getElementById('first');
const $msgSecond = document.getElementById('second');
const $photos = document.querySelector('.photos');

const $btn1 = document.getElementById('btn1');
const $btn2 = document.getElementById('btn2');

const $reply1 = document.getElementById('reply1');
const $reply2 = document.getElementById('reply2');
const $reply3 = document.getElementById('reply3');

const $send = document.querySelector('.send');
const $input = document.getElementById('input');


$btn1.addEventListener('click', choise1);
$btn2.addEventListener('click', choise2);
$send.addEventListener('click', sendMsg);


function choise1 () {
    
    $reply1.innerHTML = "I choose the $29!";
    $reply1.style.display = "block";
    $msgFirst.style.display = "none";

    setTimeout(reply2, 3000);
    setTimeout(reply3, 5000); 
    setTimeout(reload, 8000);

}

function reply2 () {
    $reply2.innerHTML = "Well! Good choice. Thank you very much.";
    $reply2.style.display = "block";
    $msgSecond.style.display = "none";
}


function reply3 () {
    $reply3.innerHTML = "Have a good day. Hugs.";
    $reply3.style.display = "block";
    $photos.style.display = "none";
}





function choise2 () {
    
    $reply1.innerHTML = "I prefer the $49!";
    $reply1.style.display = "block";
    $msgFirst.style.display = "none";

    setTimeout(reply4, 3000);
    setTimeout(reply5, 5000); 
    setTimeout(reload, 8000);

}

function reply4 () {
    $reply2.innerHTML = "Great time to walk your pet.";
    $reply2.style.display = "block";
    $msgSecond.style.display = "none";
}


function reply5 () {
    $reply3.innerHTML = "Have a good day. Hugs.";
    $reply3.style.display = "block";
    $photos.style.display = "none";
}



//Envio da mensagem

function sendMsg () {
    let msg = $input.value;
    $reply1.innerHTML = msg;
    $input.value = "";
    $reply1.style.display = "block";
    $msgFirst.style.display = "none";

    setTimeout(reply6, 3000);
    setTimeout(reply7, 5000); 
    setTimeout(reload, 8000);
  
}


function reply6 () {
    $reply2.innerHTML = "Please choose an option by clicking on the value.";
    $reply2.style.display = "block";
    $msgSecond.style.display = "none";
}


function reply7 () {
    $reply3.innerHTML = "We will start over.";
    $reply3.style.display = "block";
    $photos.style.display = "none";
}

function reload () {
    location.reload();
}


})();





