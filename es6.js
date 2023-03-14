const students = {
   name: 'Adnan Hassan',
   age: 24,
   habbits: ['codding', 'research', 'watch movie', 'travaling with myh adorer bou'],
   ocupation: 'programmer'
};


// 1 => Template string 
const about = `My name is ${students.name} and my age ${students.age}`;
// console.log(about);

// 2 => arrow function

const getTwentyThree = () => 23;
const addfitySix = num => num + 56;
const isEven = x => x % 2 === 0;
const addTwo = (x, y, z) => x + y % z;
const doMath = (num1, num2) => {
   const result = num1 * num2;
   return result;
}

// 3=> spred operator

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);