// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: Apr 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function checks if the user has selected the random number from above
 */
// eslint-disable-next-line no-unused-vars
function generateNumber () {
  // input
  const positiveNumber = document.getElementById('option-positive').checked
  // process
  if (positiveNumber == true) {
    // output
    document.getElementById('answer').innerHTML =
    'You have guessed the correct number! HURRAY!'
  }
  if (userNumber !== randomNumber) {
    // output
    document.getElementById('result').innerHTML =
    'You have guessed the wrong number! BOO!' +
    'The correct number was:' + randomNumber + '.'
  }
}
