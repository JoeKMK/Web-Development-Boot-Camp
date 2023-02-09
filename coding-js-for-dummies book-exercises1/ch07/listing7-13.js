function squareItUp(startingNumber) {

  // Termination conditions, invalid input
  if ((typeof startingNumber != 'number') || (startingNumber <= 1)) {
  return - 1
  }

  square = staringNumber * startingNumber;

  //Base condition
  if (square > 1000000) {
    return square; // Return the final value
    } else { // If the base condition isn't met, do it again.
    return squareItUp(square);
  }
  
}