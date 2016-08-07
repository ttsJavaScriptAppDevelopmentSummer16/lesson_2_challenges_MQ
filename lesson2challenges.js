//slice and splice//
// var familyNames = ['Amina', 'Mariam', 'Nadia', 'Rabia', 'Sadia', 'Dad']; //array of names.
// familyNames.indexOf('Nadia'); //
// familyNames.indexOf('Dad');//
//
// console.log(familyNames.indexOf('Dad'));
//
// console.log(familyNames.slice(0,2));
//
// familyNames.splice(3,4,'Rasha', 'Sado');
// console.log(familyNames);


//ITERATING OVER AN ARRAY//
// var pizzas = ['veggie', 'meat lovers', 'plain'];
//
// for(var i = 0; i < pizzas.length; i++) {
//   console.log(pizzas[i]);
// }
// //this logs --> veggie, meat lovers, plain
//
// pizzas.forEach(function(item, index) {
//   console.log(item, index);
// });
// // this logs --> veggie 0, meat lovers 1, plain 2

//converting arrays to strings//
// var family = ['Mom', 'Dad', 'Me', 'Cousins'];
// console.log(family); //logs the array defined above for family.
// family.toString();
// console.log(family.toString()); //logs line above. turns entire array to one string.--> Mom,Dad,Me,Cousins
// family.join(' & ');
// console.log(family.join(' & ')); // logs line above. enters & between each item.--> Mom & Dad & Me & Cousins

//ORDERING SORTING - not working - //
//lets say i have a bunch of cash and i want them sorted from least to greatest//
// var dollas = [1, 10, 20, 5, 50, 5, 100, 20];
// dollas.sort();
// console.log(dollas.sort());
// console.log(dollas.reverse());

//EXERCISE 1//
// //1
// var shoplist = ['pop tarts', 'ramen', 'chips', 'salsa', 'coffee'];
// // console.log(shoplist);
// //2
// shoplist[5]='fruit loops'
// // console.log(shoplist);
// //3
// shoplist[shoplist.indexOf('coffee')] = 'fair trade coffee'
// // console.log(shoplist);
// //4
// shoplist[shoplist.indexOf('chips', 'salsa')] = 'rice', 'beans';
// console.log(shoplist);
// //5
// var cart = [];
// //6
// cart.push(shoplist.pop());
// console.log(cart);
// console.log(shoplist);
// //7
// cart.unshift(shoplist.shift());
// console.log(cart);
// console.log(shoplist);
// //8
// var shopcart = [];
// while (shoplist.length > 0) {
//   shopcart.push(shoplist.pop());
// };
// console.log(shopcart);
// console.log(shoplist);
// //9
// shopcart.sort().reverse();
// console.log(shopcart);
// //10
// shopcart.toString();
// console.log(shopcart.toString());
// shopcart.join(', ');

//////////
// var dog = {
//   name: 'maple',
//   breed: 'golden retriever',
//   age: 2,
//   awesome: true,
//   friends: ['Roxy', 'Harley'],
//   born: {
//     state: 'NC',
//     country: 'usa'
//   }
// };
//
// //addressing an object//
// //either dot notation or bracket:
//
//
// console.log(dog.born.state);
// dog.name = 'maple qasim';
// console.log(dog);

//EXERCISE 2, ADDRESSING OBJECTS:

var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};

//1// Name of the course ('JavaScript Applications')
console.log(course.name);
//2 Name of the second teacher ('Shane')
console.log(course.teachers[1]);
//3 Name of the first student ('Steve')
console.log(course.students[0].name);
//4 Katy's computer type ('macbook')
console.log(course.students[1].computer.type);
//5 The preReq equipment object
console.log(course.preReqs.equipment);
//6 The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);
//7 string listing the OSOptions separated by 'or' ('linux or osx')
var stringy = course.preReqs.equipment.OSOptions
console.log(stringy.toString());
var addor = stringy.join(' or ');
console.log(addor);
//8 An array of all the students that are using OSX.
var students = [];
students.push(course.students.pop());
console.log(students);
