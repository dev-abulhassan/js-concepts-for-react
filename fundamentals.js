// Programming 6 rotno

// 1. => How declear a veriable 
/**
 * var old version 
 * let resign avibale
 * const resign not avible 
 * */
var name = 'Adnan Hassan';
// let user = 'Adnan Hassan';
const myname = 'Adnan Hassan'

// 2. => 6 basic condition or math operator (<, >, ===, !==, <=, >=)
// 2-1 => multipole condition (||, &&)
const numberOne = 38
const numbertow = 38
if (numberOne === numbertow) {
   console.log('is number is same');
}
else {
   console.log('number a fergor ase');
};

//3. => array
// 3-1 => index
// 3-2 => length
// 3-3 => push, pop
const friendsName = ['Masud Rana', 'Soriful Islam', 'Naiyem Islam'];
// console.log(friendsName.length)

//4. => Loop
// 4-1 => for loop
let num = 0
for (let i = 0; i < num.length; i++) {

}

// 5. => Function
function functionName(num, num2) {
   const result = num * num2
}
const output = functionName(32, 45);

// 6. => object
const students = {
   name: 'Adnan',
   age: 24,
   habbits: ['codding', 'research', 'watch movie', 'travaling with myh adorer bou'],
   ocupation: 'programmer'
}
   `3 way to access object property`
const myobject = 'ocupation'
console.log(students.name);
console.log('age');
console.log(myobject);
