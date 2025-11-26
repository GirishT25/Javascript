const obj1 = {
    name : 'Girish',
    age : 21 ,
    gender : 'Male'
}

console.log(Object.keys(obj1));

// Object.freeze(obj1); // this frezze the object where we cannot change the values of the object

obj1.name = 'Tony';
for(let key in obj1){
    console.log(key , obj1[key.valueOf()])
}


console.log(Object.values(obj1)); // this give us the values of the object
console.log(Object.entries(obj1)); // this give us the all the entries in the object1


const obj2 = { a :1 , b: {
    c : 2
}};
const obj3 = {
    d :  3,
    g : 4
}

const obj4 = Object.assign(obj2 , obj3);
console.log(typeof obj4)
for(let Key in obj4 ){
    console.log(`${Key} : ${obj4[Key.valueOf()]}`);
}
// here we create the shallow copy of the object where  the shallow copy does not create the copy of object in object

Object.seal(obj3); // here we see the object is seal where we can update the values and cannot add or delete the values
obj3.d = 55; // this is allowed 
obj3.gh = 34; // this is not allowed


for(let Key in obj3 ){
    console.log(`${Key} : ${obj3[Key.valueOf()]}`);
}

const parent = {brand: "BMW"}; 
const car = Object.create(parent); // here it create the object where inherit the properties from the parent 
car.model = "X5"; // it create the new value in the object
console.log(typeof car)

for(let key in car){
    console.log(`${key} : ${car[key.valueOf()]}`);

}

