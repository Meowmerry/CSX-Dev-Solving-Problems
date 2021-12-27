/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: countBy
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned. */

/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : array, and callback
// outpup : object count odd or even;
// create a funciton countBy that accepts an array and a callback as arguments
const countBy = (array, callback) => {
    // declare a variable object assign to emplty {};
    const obj = {};
    let odd = 0;
    let even = 0;
    // iterate thru array use a for loop
    for (let i = 0; i < array.length; i++) {
        // invoke a function callback and passed in current element;
        // if return of callback is even, reassign object to key and value by add 1 to even
        if (callback(array[i]) === 'even') {
            obj[callback(array[i])] = even += 1
            // else return of callback is odd, reassign object to key and  value by add 1 to odd 
        } else if (callback(array[i]) === 'odd') {
            obj[callback(array[i])] = odd += 1
        }
    }
    // return object;
    return obj;
}
// Uncomment these to check your work!
function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const countBy1 = (array, callback) => {
    // declare an empty object
    const object = {};
    // use a filter to iterate thru array
    array.filter(num => {
        // declare a variable evalute assign to invokeing a callback passed current element of array;
        const evaluate = callback(num)
        // determined, by reassign object key is evalute,
        // if object[evalute] is not defined, set value = 0;
        if (!object[evaluate]) object[evaluate] = 0;
        // otherwise set value =+ 1;
        object[evaluate] += 1;
    })
    // return object;
    return object;
}
// Uncomment these to check your work!
function evenOdd1(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}
const nums1 = [1, 2, 3, 4, 5];
console.log(countBy1(nums1, evenOdd1)); // should log: { odd: 3, even: 2 }
/* ========================== SOLUTION 3  ======================================
================================================================================ */
const countBy2 = (array, callback) => {
    // create an empty object that will be the return;
    const object = {};
    // create an empty array evalute that will store the respond from invoking callback function;
    const evalute = [];
    // use a forEach to iterate thru array, and each element passed in callback function and push to evalute array;
    array.forEach(element => {
        evalute.push(callback(element))
    });
    // declare a variable count set to 0;
    let count = 0;
    // use for of loop to iterate  to evalute, for finding value
    for (const key of evalute) {
        // if find key in evalute, ressign evalute[key] decress 1 to count
        if (key) object[key] = count - 1;
        // increment count by 1
        count++;
    }
    return object;

}
// Uncomment these to check your work!
function evenOdd2(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}
const nums2 = [1, 2, 3, 4, 5];
console.log(countBy2(nums2, evenOdd2)); // should log: { odd: 3, even: 2 }
/* ========================== SOLUTION 4  ======================================
================================================================================ */
const countBy3 = (array, callback) => {
    // create an empty object that will be the return;
    const object = {};
    // create an empty array evalute that will store the respond from invoking callback function;
    const evalute = [];
    // use a forEach to iterate thru array, and each element passed in callback function and push to evalute array;
    array.forEach(element => {
        evalute.push(callback(element))
    });
    // declare a variable count set to 0;
    let count = 0;
    // use for in loop to iterate  to evalute, for finding value
    for (const key in evalute) {
        // if find key in evalute, ressign evalute[key] decress 1 to count
        if (evalute[key]) object[evalute[key]] = count - 1;
        // increment count by 1
        count++;
    }
    return object;

}
// Uncomment these to check your work!
function evenOdd3(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}
const nums3 = [1, 2, 3, 4, 5];
console.log(countBy3(nums3, evenOdd3)); // should log: { odd: 3, even: 2 }
/* ========================== SOLUTION 5  ======================================
================================================================================ */
const countBy4 = (array, callback) => {
    // create an empty object that will be the return;
    const object = {};
    // create an empty array evalute that will store the respond from invoking callback function;
    const evalute = [];
    // use a forEach to iterate thru array, and each element passed in callback function and push to evalute array;
    array.forEach(element => {
        evalute.push(callback(element))
    });
    // declare a variable count set to 0;
    let count = 0;
    evalute.forEach((ele) => {
        if (ele) object[ele] = count - 1;
        count++;
    })
    return object;

}
// Uncomment these to check your work!
function evenOdd4(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}
const nums4 = [1, 2, 3, 4, 5];
console.log(countBy4(nums4, evenOdd4)); // should log: { odd: 3, even: 2 }

/* ========================== SOLUTION 6  ======================================
================================================================================ */
const countBy5 = (array, callback) => {
    return array.reduce((outputObj, currentValue) => {
        const evaluate = [callback(currentValue)];
        evaluate.forEach(ele => {
            if (!outputObj[ele]) outputObj[ele] = 0;
            outputObj[ele] += 1;
        });
        return outputObj;
    }, {})
}
// Uncomment these to check your work!
function evenOdd5(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}
const nums5 = [1, 2, 3, 4, 5];
console.log(countBy5(nums5, evenOdd5)); // should log: { odd: 3, even: 2 }