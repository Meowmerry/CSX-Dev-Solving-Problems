/*
Write a function 'stored' that takes in a function and returns a new function. The new function
will check if it has already computed the result for the given argument. If it hasn't, it will
run the passed-in function on the argument and return the result. If it has, it will return
the stored argument along with its result. If an argument is not a number, the new function
will not store the argument and instead return the error message "Please enter a valid number".

Ex:
const cube = (n) => n ** 3;
const cubeStored = stored(cube);
cubeStored(2) --> 8
cubeStored(2) --> '2: 8'
cubeStored(3) --> 27
cubeStored(3) --> '3: 27'
cubeStored('a') --> "Please enter a valid number"
cubeStored('a') --> "Please enter a valid number"
cubeStored(2) --> '2: 8'
*/

  /* =========================== SOLUTION 1 ========================== */
const stored1 = callback => {
    //create hashmap to store previous key:value pairs
    //need hashmap to persist, closure, so need to return function
    const cache = {};
    return val => {
      if (typeof val === 'number') {
        if (val in cache) {
          return `${val}: ${cache[val]}`;
        }
        cache[val] = callback(val);
        return cache[val];
      }
      return 'Please enter a valid number';
    };
  };

  /* =========================== SOLUTION 2 ========================== */
  const stored2 = (callback)=>{
    const object = {}
    return (numbers)=>{
      if(typeof numbers !== 'number') return `Please enter a valid number`;
      else if(numbers in object) return `${numbers}: ${object[numbers]}`;
      else {
        object[numbers] = callback(numbers)
        return object[numbers];
      }
    } 
  }

  const cube2 = (n) => n ** 3;
  const cubeStored2 = stored2(cube2);
  console.log(cubeStored2(2) )//--> 8
  console.log(cubeStored2(2)) //--> '2: 8'
  console.log(cubeStored2(3)) //--> 27
  console.log(cubeStored2(3)) //--> '3: 27'
  console.log(cubeStored2('a')) //--> "Please enter a valid number"
  console.log(cubeStored2('a')) //--> "Please enter a valid number"
  console.log(cubeStored2(2)) //--> '2: 8'
  console.log(cubeStored2(0)) // --> 0
console.log(cubeStored2(0)) // --> '0: 0'
  /* =========================== SOLUTION 3 ========================== */
  const stored3 = (callback)=>{
    const object = {}
    return (numbers)=>{
      if(typeof numbers !== 'number') return `Please enter a valid number`;
      else if(object.hasOwnProperty(numbers)) return `${numbers}: ${object[numbers]}`;
      else {
        object[numbers] = callback(numbers)
        return object[numbers];
      }
    } 
  }
  const cube3 = (n) => n ** 3;
  const cubeStored3 = stored3(cube3);
  console.log(cubeStored3(2) )//--> 8
  console.log(cubeStored3(2)) //--> '2: 8'
  console.log(cubeStored3(3)) //--> 27
  console.log(cubeStored3(3)) //--> '3: 27'
  console.log(cubeStored3('a')) //--> "Please enter a valid number"
  console.log(cubeStored3('a')) //--> "Please enter a valid number"
  console.log(cubeStored3(2)) //--> '2: 8'
  console.log(cubeStored3(0)) // --> 0
console.log(cubeStored3(0)) // --> '0: 0'