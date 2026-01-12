var a;
console.log(a);
 a = 10;


sayHello();

function sayHello(){
    console.log("Hello Girish");
}   


// sayHi();
// var sayHi = function(){
//     console.log("Hi Girish");
// }
console.log(add(5,3));
function add(a , b){
    return a + b ;
}

(function(){
    console.log("IIFE executed");
})();


function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

// Use of clousre
function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

console.log(bankAccount().deposit(500));

function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
// console.log(double(5));
console.log(multiplier(3)(4)); // 12

function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    return cache[n] = fn(n);
  };
}
const factorial = memoize(function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}
);
console.log(factorial(5)); 

function add2(a , b){
    return a + b ;
}

// console.log(add2(var1 , var2)); // It will throw an error because var1 and var2 are not defined
let var1 = 5 ;
let var2 = 10 ;