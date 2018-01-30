//Single line comment
/** This is  multi line comment
 */

 //Variables
 var name = "Romulus"; //This is old school javascript (dont use this)
 const fruit = "Banana"; // Constant binding (lock it in the cup)
 let veggie = "carrot"; //simmilar to var, but some otherdifferences. 
console.log ("Name: ", name); //print
console.log ("Fruit: ", fruit);
console.log ("Veggie: ", veggie); 


// Simple Datatypes
//Strings
const aString = "things and stuff";
//a string => spadce in variables names are .. bad!!
//so wee remove the soace and capitalize all words but the first.
// this is a called camel casing CONVENTION!!!
const anotherString = 'some other things and stuff'; //this is a single quotes
const stringWithNumbers = '1919192';
console.log("aString: ", aString);
console.log("anotherString: ", anotherString);
console.log("stringWithNumber: ", stringWithNumbers);
console.log("What is the type of aString?", typeof aString);
// String will come back up. There is more to know 
//Numbers 
const aNumber = 1;
const anotherNumber = 3;
console.log("aNumber: " , aNumber);
console.log("anotherNumber:" ,anotherNumber);
console.log("Type of aNumber: " ,typeof aNumber);
console.log("Type of anotherNumber: ", typeof anotherNumber);

//Number will come back up. There is more to know.
//Arrays
const anArray = [1, 2, 3, 4]; // an array of number
const aStringArray =["cheese", "bacon" , "egg"]; //an array of strings
console.log("anArray:" , anArray);
console.log("aStringArray: ", aStringArray);
console.log("How many elements are in anArray:" , anArray.length);

console.log("What is the type of anArray:" ,typeof anArray);
console.log('What is the index 1 element of anArray?' ,anArray[1] );

//We are diffinitely not finished with arrays.
//Objects
const anObjects = {
    'color': 'red', //key.value => key is 'color' the value is 'red'
    size: 500, // key are strings, but the quotes are implied
    'topping': ['peperoni' , 'cheese']
    
};

console.log("anObject: ", anObjects);
console.log("Type of anObject ", typeof anObjects);
console.log('What is the color of the object?' ,anObjects.color);
console.log('What is the size of the object' , anObjects.size);
console.log('What is the topping on anObjects' ,anObjects['topping']);


//Objects are everywhere! We will return.
//Booleans
const yes = true;
const no = false;

