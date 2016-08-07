//arrays//
var cookies = ['chocolate chip', 'oatmeal', 'sugar'];

//addressing an array//
console.log(cookies[1]); // oatmeal is the answer

//getting array length''
var vegetables = ['broccoli', 'spinach', 'mushrooms', 'avocado'];
console.log(vegetables.length);//will return 4

//push pop//
var peppers = ['habenero', 'jalepeno'];
peppers.push('cayenne');// this will push cayenne to the end of the list. it will then be--> ['habenero', 'jalepeno', 'cayenne'];
var recentlyAddedPepper = peppers.pop();// this will create a new variable-- var recentlyAddedPepper = 'cayenne'. Cayenne will no longer exist in the array of peppers.

//shift and unshift//
var peppers = ['habenero', 'jalepeno'];
peppers.unshift('cayenne'); // this will put 'cayenne' in the front of the array, in front of habenero. it will then be--> ['cayenne','habenero', 'jalepeno'];
peppers.shift('cayenne') //!Q is this the same as .pop??

//arbitrary adding to an array//
peppers[5] = 'pepperocini'; // --> ['cayenne','habenero', 'jalepeno', undefined, 'pepperocini'];

//finding an item in an array//
var familyNames = ['Amina', 'Mariam', 'Nadia', 'Rabia', 'Sadia', 'Dad']; //array of names.
familyNames.indexOf('Nadia'); // would be 2.
console.log(familyNames.indexOf('Dad'));// log is the only way its visible - would be 5.

//slice and splice//
var familyNames = ['Amina', 'Mariam', 'Nadia', 'Rabia', 'Sadia', 'Dad'];
//Slice - doesn't mutate array, slice(start,end)
familyNames.slice(3,5);//Rabia, Sadia
console.log(familyNames.slice(0,2)); //logged as Amina, Mariam;

//Splice - splice(start,numToRemove,...items to add) - so dumb
familyNames.splice(3,4,'Rasha', 'Sado');//created an array as follows--> [ 'Amina', 'Mariam', 'Nadia', 'Rasha', 'Sado' ];

//Iterating over an array ***//
var pizzas = ['veggie', 'meat lovers', 'plain'];

for(var i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}//this logs --> veggie, meat lovers, plain

pizzas.forEach(function(item, index){
  console.log(item, index);
});// this logs -->veggie 0, meat lovers 1, plain 2

//converting arrays to strings//
var family = ['Mom', 'Dad', 'Me', 'Cousins'];
console.log(family); //logs the array defined above for family.
family.toString();
console.log(family.toString()); //logs line above. turns entire array to one string.--> Mom,Dad,Me,Cousins
family.join(' & ');
console.log(family.join(' & ')); // logs line above. enters & between each item.--> Mom & Dad & Me & Cousins

//ordering sorting//
//ORDERING SORTING - not working - //
//lets say i have a bunch of cash and i want them sorted from least to greatest//
var dollas = [1, 10, 20, 5, 50, 5, 100, 20];
dollas.sort();
console.log(dollas.sort());
//[ 1, 10, 100, 20, 20, 5, 5, 50 ]

console.log(dollas.reverse());
//[ 50, 5, 5, 20, 20, 100, 10, 1 ]

//!Q Why am i not getting the numbers in order??

//EXERCISE 1 IN LESSON2CHALLENGES.JS//

//OBJECTS/

var dog = {
  name: 'maple',
  breed: 'golden retriever',
  age: 2,
  awesome: true,
  friends: ['Roxy', 'Harley'],
  born: {
    state: 'NC',
    country: 'usa'
  };
};

//addressing an object//
//either dot notation or bracket:
course.name
course['name']

console.log(dog.born.state); //NC

//updating an object//
dog.name = 'maple qasim';
console.log(dog); //will change the name in the array to maple qasim

//mutate object//
course.fun = true; //add a property
delete course.name; //remove one

//EXERCISE, ADDRESSING OBJECTS//
