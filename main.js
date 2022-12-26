'use strict';

//All elements

const payAmountBtn = document.querySelector('#payAmount');

const decrementBtn = document.querySelectorAll('#decrement');

const quantiytEl = document.querySelectorAll('#quantity');

const incrementBtn = document.querySelectorAll('#increment');

const price = document.querySelectorAll('#price');

const subtotal = document.querySelectorAll('#subtotal');

const tax = document.querySelectorAll('#tax');

const shipping = document.querySelectorAll('#shipping');

const total = document.querySelectorAll('#total');

//loop: for add event on multiple "increment" & "decrement" buttons

for (let i = 0; i < incrementBtn.length; i ++) {
    incrementBtn[i].addEventListener("click", function () {

        //collect the value of 'quantity' textContent based on clicked "increment" button sibling
        let increment = Number(this.previousElementSibling.textContent);

        //plus "increment" variable value by 1
        increment++;

        //show "increment" variable value on 'quantity' element based on clicked "increment" button sibling
        this.previousElementSibling.textContent = increment;

    });

    decrementBtn[i].addEventListener9("click", function () {

    });
}