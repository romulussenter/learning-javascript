//caparison
//Things that we compare must be comparalbe
//camparble means that I use the following oprators:
// <, <= >=, ===, !==
//(Fulldiscolusre there are more but sometime they cause problems at the beginning)
const aString = 'abc';
const anotherString = 'abc';
const aNumber = '123';
anotherNumber = 123.2;
console.log('aString === anotherString: ', aString === anotherString);
console.log('anotherString === anotherString: ', aString < anotherString);
console.log('aString > anotherString: ', aString > anotherString);
console.log('aString <= anotherString: ', aString <= anotherString);
console.log('aString >= anotherString: ', aString >= anotherString);
console.log('aString !== anotherString: ', aString !== anotherString);
console.log('aString < anotherString: ', aString < anotherString);
console.log('aNumber === anotherNumber: ', aNumber === anotherNumber);
console.log('aNumber !== anotherNumber: ', aNumber !== anotherNumber);
console.log('aNumber >= anotherNumber: ', aNumber >= anotherNumber);
console.log('aNumber <= anotherNumber: ', aNumber <= anotherNumber);
console.log('aNumber > anotherNumber: ', aNumber > anotherNumber);
console.log('aNumber < anotherNumber: ', aNumber < anotherNumber);




//conditonal statments 
//if -> using is to run code based on the anwser to a question 
//if else -> use it to run code to based on a anwser to a question.
//if elseifelse -> I have multiple questions that determine what code run.
//Note: there is another wy called a switch  but it works a little differently.

//if
if(3 === 3){
    console.log('orange crush is delicious');

}

if('a' === 'b'){
    console.log('this will never print');
}

//if else

if('grape' === 'banana'){
    console.log('this is never going to run');

}else {
    console.log('This is a backup plan');
}

//if-elseif -else

// const someNumber = 100; //A
// const someNumber = 42; //B
const someNumber =  200;    //C
if(someNumber === 100){ //A
    console.log('it is 100');
} else if(someNumber === 42){ //B
    console.log('the meaning of life');

} else { //C
    console.log('none of the others worked');
}