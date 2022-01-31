
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
const stored = (callback)=>{
    let result = {};
    return (num)=>{
      if(typeof num !== 'number' )return "Please enter a valid number";
      else if(result[num]) return `${num}: ${callback(num)} `
      else return result[num] = callback(num) 
    }
  }
  const cube = (n) => n ** 3;
  const cubeStored = stored(cube);
  console.log(cubeStored(2) )//--> 8
  console.log(cubeStored(2)) //--> '2: 8'
  console.log(cubeStored(3)) //--> 27  console.log(cubeStored(3)) //--> '3: 27'
  console.log(cubeStored('a')) //--> "Please enter a valid number"
  console.log(cubeStored('a')) //--> "Please enter a valid number"
  console.log(cubeStored(2)) //--> '2: 8'

  /* ========================= SOLUTION 2 ===============================  */
  function stored2(callback) {
    let newObj = {};
    return (num) => {
      if (typeof num !== 'number') {
        return "Please enter a valid number";
      } else if (newObj[num]) {
        return ` ${num}: ${newObj[num]}`
      } else {
        newObj[num] = callback(num)
        return newObj[num]
      }
    }
  }

  const cube2 = (n) => n ** 3;
  const cubeStored2 = stored2(cube);
  console.log(cubeStored2(2) )//--> 8
  console.log(cubeStored2(2)) //--> '2: 8'
  console.log(cubeStored2(3)) //--> 27
  console.log(cubeStored2(3)) //--> '3: 27'
  console.log(cubeStored2('a')) //--> "Please enter a valid number"
  console.log(cubeStored2('a')) //--> "Please enter a valid number"
  console.log(cubeStored2(2)) //--> '2: 8'