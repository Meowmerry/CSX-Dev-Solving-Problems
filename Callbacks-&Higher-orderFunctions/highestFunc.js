/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/*
Challenge 21
Create a function highestFunc that accepts an object (which will contain functions) 
and a subject (which is any value). 
highestFunc should return the key of the object whose associated 
value (which will be a function) returns the largest number, when the subject is given as input.
*/
/* ============================== SOLUTION 1  ==============================
 ================================================================================ */
function highestFunc(objOfFuncs, subject) {
  let arr = [];
  let result = "";
  Object.keys(objOfFuncs).map((key) => {
    arr.push(objOfFuncs[key](subject));
  });

  const max = Math.max(...arr);

  Object.keys(objOfFuncs).map((key) => {
    if (objOfFuncs[key](subject) === max) {
      result = key;
    }
  });
  return result;
}

/* ============================== SOLUTION 2  ==============================
 ================================================================================ */
const highestFunc = (objOfFuncs, subject) => {
  let newArr = [];
  return Object.keys(objOfFuncs).reduce((acc, key) => {
    newArr.push(objOfFuncs[key](subject));
    const max = Math.max(...newArr);
    if (objOfFuncs[key](subject) === max) acc = key;
    return acc;
  }, "");
};

const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
