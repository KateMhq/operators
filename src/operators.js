// Rewrite function as arrow function
const convertToNumber= (string) => +string;
  // function receives a string representation
  // of a number convert it to a number and return it


// Rewrite function as arrow function
const convertToNegativeNumber = (string) => +string > 0 ? -string:+string;
  // function receives a string representation
  // of a number

  // convert string to number and return a negative version of the number

// Rewrite function as arrow function
const invertBoolean = (input) => typeof input === "boolean" ? !input : input;
  // function receives one argument which could be of any type

  // if it is a boolean negate it, true -> false, false to true

  // if the input is not a boolean return the input


// Rewrite function as arrow function
const convertToBoolean = (list) => list.map(x=> !!x);
  // Function  receives an array of values which could be of any type

  // Convert all values in array to boolean and return the array


// Rewrite function as arrow function
const deleteStrings= (list) => list.map(item => typeof item === "string" ? undefined :item);
  // Function receives an array of strings and numbers

  // delete strings in array, (make them undefined)

  // return resulting array


// Rewrite function as arrow function
const deleteYear=(cars) => {
  for (i=0;i<cars.length;i++){
      if (cars[i].year<1995) {
          delete cars[i].year;
      } 
  } return cars;
}
  // cars is an array of objects. Each object has a make, model and year property

  // For example { make: 'Ford', model: 'Fiesta', year: 1991 }

  // return an array of cars with year property deleted if the year is before 1995


// Rewrite function as arrow function
const isBetween = (number, from, to) => (number >= from && number < to) ? true : false;
  // function receives three numbers as arguments

  // return true if number is equal to or greater than from and less than to

  // return false otherwise


// Rewrite function as arrow function
const evens = (a, b, c, d) => !(a%2 + b%2 + c%2 + d%2);
  // function receives 4 numbers return true if all numbers are even and false otherwise

  // do not use if/else or ternary


// Rewrite function as arrow function
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const averageOfStrings = (list) => {
  let strings = list.filter(item => typeof item === "string");
  let stringsToNumbers = strings.map(item => +item);
  return stringsToNumbers.reduce(reducer)/stringsToNumbers.length;
}

  // function receives an array of numbers and string representation of numbers

  // calculate an average value of numbers represented as strings and return it.


// Rewrite function as arrow function
const footballScores = (results)=> {
  let winners=[];
  for (i=0;i<results.length;i++) {
      if (results[i].home>results[i].away) {
          winners[i]="home";
      } else if (results[i].home<results[i].away) {
          winners[i]="away";
      } else {
          winners[i]="draw";
      }
  } return winners;
  // results is an array of football scores represented as objects

  // for example: [{home: 0, away: 2}, {home: 3, away: 1}, {home: 1, away: 1}]

  // return an array of winning teams or draw if results are same
  // for example: [away, home, draw]
}

module.exports = {
  convertToNumber,
  convertToNegativeNumber,
  invertBoolean,
  convertToBoolean,
  deleteStrings,
  deleteYear,
  isBetween,
  evens,
  averageOfStrings,
  footballScores
};
