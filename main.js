"use strict";
/* Chiedi quanti km deve viaggare l'utente */
const travelDistance = +prompt("How far are you going to get? (insert km)");

/* chiedi l'età del passeggero */
const passengerAge = +prompt("What's your age? (from 1 to 99)");

/* calcolo prezzo del biglietto in base ai km */
const ticketPrice = travelDistance * 0.21;

/* sconto junior (età inferiore ai 18 anni) */
const juniorDiscount = (ticketPrice * 20) / 100;
const juniorFinalPrice = ticketPrice - juniorDiscount;

/* sconto senior (età superiore ai 65 anni) */
const seniorDiscount = (ticketPrice * 40) / 100;
const seniorFinalPrice = ticketPrice - seniorDiscount;

if (passengerAge < 18) {
  console.log(
    `You're authorized to fare ${travelDistance} km. You are ${passengerAge} years old, so you have right to a discount of ${juniorDiscount.toFixed(
      2
    )} euros! Total price is ${juniorFinalPrice.toFixed(2)} euros!`
  );
} else if (passengerAge > 65) {
  console.log(
    `You're authorized to fare ${travelDistance} km. You are ${passengerAge} years old, so you have right to a discount of ${seniorDiscount.toFixed(
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
