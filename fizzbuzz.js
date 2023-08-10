let maxCount = 100; //um hier eine Infinite-Loop zu vermeiden :P

function fizzbuzz(number = 0) {
  for (number; number < maxCount; number++) {
    if (number % 3 === 0 && number % 5 !== 0) {
      console.log("fizz");
    } else if (number % 5 === 0 && number % 3 === 1) {
      console.log("buzz");
    } else if (number % 3 === 0 && number % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(number);
    }
  }
}
fizzbuzz();
