"use strict" // It is use for the code where the file is treated as newer version of the code
// console.log(); console.log();



// Primtive Datatype : 
// number -> 2 , 4 , 4.5 , 45 ,
// boolean : true , false
// string : " ",
// null -> it store the value like nothing in there,
// undefined -> the value is not present or not assign
// symbol -> it is used for the uniqueness

let a = typeof(null)
console.log(a); // it return the object 
let b = typeof(undefined);
console.log(b); // it return the undefined 
 

// non primtive data type 

// array : It is use for the stroing the values of the multiple dataype
//          -> let arr = [1 , "Girish" ,true ,45]
// object : It is use for the storing the values in the key : value pair
            // -> let obj = {namw : "Girish" , age : 21}
// Function : It is for use for once creation and  the multiple execution 
// Data : Data Object 
// RefExp :  let re = /a/b/c ; use for the validating purpose
// Note  :  All the nonprimitive return dataype value as the object  


// let socre = true;
let socre = "Girish"; 
console.log(typeof socre);


const valueNumber = Number(socre)
console.log(valueNumber) // --> it will return the value as the 1  for value boolean
console.log(valueNumber) // --> it will return the value as the NaN  for value string

let sample = 5; 

console.log(sample + "true") // --> Basic string concatentaion using the + operator
console.log(true + sample); // --> the valuue become as the six beacuse the true = 1 and the value store in the  variable value is 5

const typeCast = true + "Girish"
console.log(typeof typeCast); // the datatype of this become as the string
console.log(typeCast) // --> the + operator conver the true as the string and give the output as the trueGirish

console.log(false - 5); // same as the value operation using the true the false value is 0 and the number value is 


console.log("5" - 2 ); // here the - operator act as the type conversion and the value "5" convert it into number
console.log("10" * 2); // same as the - operator functionality
console.log("7" / 5); //  same as the - operator functionality


console.log(typeof undefined);
console.log(null == undefined);

let ac = null;
let bc = undefined;

console.log(ac === bc); // according to the ecma script the value is true for null == undefined

console.log(typeof null);


let name = "Girish";
const tostring_conversion = Number(name)
console.log(tostring_conversion); // --> It return the value of the NaN beacuse string to number is not possible

console.log((123).toString()); // this return the string value

let sample2 = "101.25";
let parseInt_Converison = parseInt(sample2); // ---> this give the non decimal value i.e an absolute value
console.log(typeof parseInt_Converison); //
console.log(parseInt_Converison);

let sample3 = "10025"
let parseFloat_converison = parseFloat(sample3); // this give the floating number conversion . if there is not any floating point it does not give any floating point 
console.log(typeof parseFloat_converison);         // it simply return the given number
console.log(parseFloat_converison);
 


// The above values are the falsy values means they only return false as their dataytpe
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN


let str1 = "Girish";
let str2 = " Thorat";

let conactString = str1 + str2 ;
// console.log(conactString);

let subString = str1 - str2;
// console.log(subString); // It return NaN


let x = 5 ;
const y = x++;
// console.log(`the value of the y : ${y} and the value of the x : ${x}`); // this return the value of the x = 6 and the y = 5
 // this happen because of the ++ operator It first return the value and then increase the value so
 // in the x the increment values has gone
 // in the y the x value is gone

 let m = 2 ;
 const n = ++m;
//  console.log(`the value of the m : ${m} and the value of the n : ${n}`);
 // this prefix before ++ do the thing like it increase the operator and then return the value
 

 const outside = null;
 const indefined = undefined
 const bigNumber = 123456789123456789n;
//  console.log(typeof bigNumber);
//  console.log(typeof outside);
//  console.log(typeof indefined);
 

const myFunction = function(){
    // console.log('Hello World');
    
}
myFunction();
// console.log(typeof myFunction); // it return the function as the output as the object it's more like the object function

const Arr = [1,"Hello world" , true , 4.4];
Arr.forEach(element => {
    // console.log(element);
    
});

console.log( typeof Arr);
const myObj = {
    name : "Girish",
    age : 21,
    gender : "Male"
}

// console.log(myObj)
// As the type of the non primitive is the object and h 

const ID1 = Symbol('123'); // It always return the unique value for the variable
const ID2 = Symbol('123');
console.log(ID1 === ID2);  // This return the false statement
// const add = 45;
console.log(typeof add); // If we try to typeof of the var where it is not declare the return type will be the undefined


const myObj1 = {
    username : "Girish",
    gmail : "thoratgirish286@gmail.com"
}
console.log(myObj1);
 myObj1.gmail = "abcd@gmail.com";
console.log(myObj1);

 myObj1.gmail = "xyz@gmail.com";

console.log(myObj1);


// -------------------------------String methods----------------------------------
console.log("----------String-------Methods---------")
const strr = "Girish";
console.log(strr.length);
            
const game = "God Of War ";
console.log(game.length);
console.log(game.charAt(2));
console.log(game.indexOf('W'));
console.log(game.includes("War"));
console.log(game.slice(0 , 4));
console.log(`Hello this is an old game ${game}`);
const usingSubstr =  game.substring(0 , 4)
console.log(usingSubstr);
const useSlice = game.slice(-3);
console.log(useSlice);
const useReplace =  game.replace("War" , "Hell");
console.log(useReplace);
console.log(game.trim()); // It remove the extra space
console.log(game.split('-'));


const var4 = null;
let  var5 ;
console.log(typeof var4);
console.log(typeof var5);






