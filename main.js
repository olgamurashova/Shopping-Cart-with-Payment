'use strict';

//All elements

const payAmountBtn = document.querySelector('#payAmount');

const decrementBtn = document.querySelectorAll('#decrement');

const quantitytEl = document.querySelectorAll('#quantity');

const incrementBtn = document.querySelectorAll('#increment');

const price = document.querySelectorAll('#price');

const subtotalEl = document.querySelector('#subtotal');

const taxEl = document.querySelector('#tax');

const shipping = document.querySelector('#shipping');

const totalEl = document.querySelector('#total');

//loop: for add event on multiple "increment" & "decrement" buttons

for (let i = 0; i < incrementBtn.length; i ++) {
    incrementBtn[i].addEventListener("click", function () {

        //collect the value of 'quantity' textContent based on clicked "increment" button sibling
        let increment = Number(this.previousElementSibling.textContent);

        //plus "increment" variable value by 1
        increment++;

        //show "increment" variable value on 'quantity' element based on clicked "increment" button sibling
        this.previousElementSibling.textContent = increment;
        totalCalc();

    });

    decrementBtn[i].addEventListener("click", function () {
         //collect the value of 'quantity' textContent based on clicked "decrement" button sibling
         let decrement = Number(this.nextElementSibling.textContent);

         //minus 'decrement' variable value by 1 based on condition
         decrement <= 1 ? 1 : decrement--;

         //show "decrement" variable value on 'quantity' element based on clicked "decrement" button sibling
         this.nextElementSibling.textContent = decrement;
         totalCalc();

    });
}

//function for calculating total amount of product price

const totalCalc = function() {
    //declare all initial variables 

    let tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    //loop for calculating 'subtotal' value from every single element

    for (let i = 0; i < quantitytEl.length; i++) {
        subtotal += Number(quantitytEl[i].textContent) * Number(price[i].textContent);

    }

//show the 'subtotal' variable value on 'subtotal' element 
    subtotalEl.textContent = subtotal.toFixed(2);

//claculating subtotal tax

    totalTax = subtotal * tax;

//show the totaltax on tax element 
    taxEl.textContent = totalTax.toFixed(2);

//calculating the total 

    total = subtotal + totalTax;

//show the 'total' variable value on 'total' element & 'payAmountBtn' 

    totalEl.textContent = total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);

}