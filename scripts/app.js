"use strict"

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');
let degree = 270;

box.addEventListener('click', (e) => {
    if (e.target.className.includes('prev')) {
        degree += 90;
        box.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
    } else if (e.target.className.includes('next')) {
        degree -= 90;
        box.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
    }
})
