// STEP 1

var name = 'Allison';
var lastName = 'Yick';
var favNumber = 29;
var favNumberString = '29';
var btsIsNumberOne = true;
var myArray = ['a', 'l', 'l', 'i', 's', 'o', 'n'];
var iAmBroke = true;
var randomArray = [1, 'Am I broke?', iAmBroke]

console.log ('My name is', name);
console.log ('My favourite number is', favNumber);
console.log ('My favourite number is', favNumberString);
console.log ('BTS is #1 is', btsIsNumberOne);
console.log ('If you forgot, my name is', myArray);
console.log (randomArray);
console.log (name + ' ' + lastName);
console.log (50 + 50);

// STEP 2

var firstLetter = myArray[0];
var lastLetter = myArray[myArray.length - 1];

console.log (firstLetter, lastLetter);

// STEP 3

var longWord = 'supercalifragilisticexpialidocious';

console.log ('The number of letters in supercalifragilisticexpialidocious is', longWord.length);

// STEP 4

var nameLength = name.length == lastName.length;

console.log ('Is the length of my first name equivalent to the length of my last name?', nameLength);

// STEP 5

var students = 15; 

if (students == 15) {
  console.log ('All of the students are in class');
} else {
  console.log ('Not everyone is here');
}

// STEP 6

for ( var i = 0; i < myArray.length; i++ ) {
  console.log(myArray[i] + ' is a letter in my name');
}

// STEP 7

var date = new Date;
var hour = date.getHours();
var min = date.getMinutes();

if (19 < hour < 21 && min == 40) {
  console.log("It is between 7pm and 9:40pm");
} else {
  console.log("It is NOT between 7pm and 9:40pm");
} 

// STEP 8

var day = date.getDay();

if (day == 1) {
  console.log("It's Monday!");
} else if (day == 2) {
  console.log("It's Tuesday!");
} else if (day == 3) {
  console.log("It's Wednesday!");
} else if (day == 4) {
  console.log("It's Thursday!")
} else if (day == 5) {
  console.log("It's Friday!");
} else if (day == 6) {
  console.log("It's Saturday!");
} else {
  console.log("It's Sunday!")
}

// STEP 9

var favRestaurants = [
  'Udon West',
  '99 Favor Taste',
  'PhoBar'
];

var favAnimals = [
  'panda',
  'koala',
  'corgi'
];

var favPlacesInNyc = [
  'Kung Fu Tea',
  'Washington Square Park',
  'SOHO'
];

var favPokemon = [
  'Vaporeon',
  'Bulbasaur',
  'Charizard'
];

// STEP 10

var favourites = [favRestaurants, favAnimals, favPlacesInNyc, favPokemon];

// STEP 11

for ( var i = 0; i < favourites.length; i++ ) {
  console.log(favourites[i]); 

  for ( var x = 0; x < favourites[i].length; x++) {
    console.log(i + ' ' + favRestaurants[i]);
    console.log(i + ' ' + favAnimals[i]);
    console.log(i + ' ' + favPlacesInNyc[i]);
    console.log(i + ' ' + favPokemon[i]);
}
}

// STEP 12

for (var i = 0; i < favourites.length; i++) {
  console.log(favourites[i]);

  for (var x = 0; x < favourites[i].length; x++) {
    console.log(favourites[i][x]);
  }
}