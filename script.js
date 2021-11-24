// this is your function
// code borrowed and modified from: https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a

function fizzBuzz() {
  for (let i = 1; i < 31; i++) {
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
  }
}

// function is called here
fizzBuzz();

/*
// this is your function
function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i === 40) {
      console.log('This is the last thing to print!');
    } else if (i % 10 === 0 && i % 20 === 0) {
      console.log('This number is divisible by 10 and 20');
    } else {
      console.log(i);
    }
  }
}

// function is called here
fizzBuzz();
*/
