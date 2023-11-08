"use strict";

/* chiedi nome e cognome del passeggero */
const userID = document.querySelector("#floatingInput").value;
/* Chiedi quanti km deve viaggare l'utente */
const travelDistance = document.querySelector("#floatingInputValue").value;
/* chiedi l'età del passeggero */
const userAge = document.querySelector("#floatingSelect").value;
/* bottoni */
const submit = document.getElementById(buttonSubmit);
const reset = document.getElementById(buttonReset);

/* appare il secondo contenitore */
const appear = document.querySelector("body > div:nth-child(4)");
/* calcolo prezzo del biglietto in base ai km */
const ticketPrice = travelDistance * 0.21;

/* sconto junior (età inferiore ai 18 anni) */
const juniorDiscount = (ticketPrice * 20) / 100;
const juniorFinalPrice = ticketPrice - juniorDiscount;

/* sconto senior (età superiore ai 65 anni) */
const seniorDiscount = (ticketPrice * 40) / 100;
const seniorFinalPrice = ticketPrice - seniorDiscount;

submit.addEventListener("click", function () {
  alert("ho cliccato sul bottone");
});
if (userAge < 18) {
  console.log(
    `You're authorized to fare ${travelDistance} km. You are ${userAge} years old, so you have right to a discount of ${juniorDiscount.toFixed(
      2
    )} euros! Total price is ${juniorFinalPrice.toFixed(2)} euros!`
  );
} else if (userAge >= 65) {
  console.log(
    `You're authorized to fare ${travelDistance} km. You are ${userAge} years old, so you have right to a discount of ${seniorDiscount.toFixed(
      2
    )} euros! Total price is ${seniorFinalPrice.toFixed(2)} euros!`
  );
} else {
  console.log(
    `You're authorized to fare ${travelDistance} km. Total price is ${ticketPrice.toFixed(
      2
    )}`
  );
}
