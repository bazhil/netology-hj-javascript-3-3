'use strict';

const navPanel = document.getElementsByTagName('nav')[0]; 
const secretPanel = document.getElementsByClassName('secret')[0]; 
const secretCode = 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ'; 
let arr = [];



function showSecret(event) {
    arr.push(event.code); 
    if (arr.join('') !== secretCode) { 
        if (secretCode.includes(arr.join('')) === -1) { 
            arr.length = 0; // то массив пустой
        }
    } else {
        secretPanel.classList.add('visible'); 
    }
}


function showMenu(event) {
    if (event.ctrlKey && event.altKey && event.code === 'KeyT') { 
          navPanel.classList.toggle('visible'); 
    }
    
}

document.addEventListener('keydown', showMenu); 
document.addEventListener('keydown', showSecret);