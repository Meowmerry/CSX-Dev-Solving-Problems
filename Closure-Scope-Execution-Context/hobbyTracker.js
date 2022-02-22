/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: hobbyTracker
Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);

updateHobbies('yoga', 2);  // { yoga: 2, baking: 0, piano: 0 }

updateHobbies('baking', 3); // { yoga: 2, baking: 3, piano: 0 }

updateHobbies();  // 'tracker has been reset!'


*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
// Create a function hobbyTracker that takes an array of hobbies as a parameter
function hobbyTracker(hobbies) {
    // creates a cache object to store key
    const cacheObj = {};
    // using a forEach to iterates thru hobbies 
    // update cacheObje set to each element as a key from hobbies 
    hobbies.forEach(ele => {
        cacheObj[ele] = 0;
    });
    // return a function that takes a string and interger 
    return (string, interger) => {
        // check if the return function has parameter 
        if (string && interger) {
            // update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'string'
            cacheObj[string] = interger + cacheObj[string]
            // return the updated cacheObj;
            return cacheObj;
        } else { // otherwish, If the returned function is invoked with no arguments
            // reset all values in the cache object to zero
            for (let key in cacheObj) {
                cacheObj[key] = 0;
            }
            // return the string 'tracker has been reset!'
            return `tracker has been reset!`;
        }
    };
};

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const hobbyTracker1 = (hobbies) => {
    const cache = hobbies.reduce((acc, hobby) => ((acc[hobby] = 0), acc), {});
    return function updateHours(hobby, hours) {
        if (arguments.length === 0) {
            hobbies.forEach((el) => (cache[el] = 0));
            return 'tracker has been reset!';
        }
        cache[hobby] += hours;
        return cache;
    };
};
const updateHobbies1 = hobbyTracker1(['yoga', 'baking', 'piano']);
updateHobbies1('yoga', 2);
updateHobbies1('baking', 4);
updateHobbies1('yoga', 1);
console.log(updateHobbies1('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies1()); // --> 'tracker has been reset!'
console.log(updateHobbies1('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function hobbyTracker3(hobbies) {
    // declare an cache object assign to empty object {} and set value to cach by using reduce
    const cache = hobbies.reduce((acc, hobby) => {
        acc[hobby] = 0;
        return acc;
    }, {});
    return (string, interger) => {
        // update cache object aadding the value of the passed in interger to the cache at the key corresponding with the passed ing hobby, and return the cache object;
        if (string && interger) {
            cache[string] = interger + cache[string]
            return cache;
        }
        // if the function return has no agrement, will reset all values in the cache object to zero and return 'tracker has been reset'
        else {
            for (let key in cache) {
                cache[key] = 0
            }
            return 'tracker has been reset!';
        }
    }
}
const updateHobbies3 = hobbyTracker3(['yoga', 'baking', 'piano']);
updateHobbies3('yoga', 2);
updateHobbies3('baking', 4);
updateHobbies3('yoga', 1);
console.log(updateHobbies3('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies3()); // --> 'tracker has been reset!'
console.log(updateHobbies3('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}


/* ========================== SOLUTION 4  ======================================
================================================================================ */
function hobbyTracker4(hobbies) {
    const cache = hobbies.reduce((acc, hobby) => ((acc[hobby] = 0), acc), {})
    return (hobby, integer) => {
        if (hobby && integer) {
            cache[hobby] = integer + cache[hobby];
            return cache;
        } else {
            for (let key in cache) {
                cache[key] = 0
            }
            return 'tracker has been reset!';
        }
    }
}

// Uncomment the code below to check your code:
const updateHobbies4 = hobbyTracker4(['yoga', 'baking', 'piano']);
updateHobbies4('yoga', 2);
updateHobbies4('baking', 4);
updateHobbies4('yoga', 1);
console.log(updateHobbies4('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies4()); // --> 'tracker has been reset!'
console.log(updateHobbies4('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
console.log(updateHobbies4()); // --> 'tracker has been reset!'
console.log(updateHobbies4('yoga', 1)); // --> { yoga: 1, baking: 0, piano: 0}

/* ========================== SOLUTION 5  ======================================
================================================================================ */
function hobbyTracker5(hobbies) {
    const cache = hobbies.reduce((acc, hobby) => (acc[hobby] = 0, acc), {})
    return (str, interger) => {
        if (str && interger) {
            cache[str] = cache[str] + interger;
            return cache;
        } else {
            Object.keys(cache).forEach(key => cache[key] = 0)
            return 'tracker has been reset!'
        }
    }
}

const updateHobbies5 = hobbyTracker5(['yoga', 'baking', 'piano']);
updateHobbies5('yoga', 2);
updateHobbies5('baking', 4);
updateHobbies5('yoga', 1);
console.log(updateHobbies5('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies5()); // --> 'tracker has been reset!'
console.log(updateHobbies5('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
console.log(updateHobbies5()); // --> 'tracker has been reset!'
console.log(updateHobbies5('yoga', 1)); // --> { yoga: 1, baking: 0, piano: 0}


function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            num = max_num
            max_num += 1
        }
    }
    return max_num;
}
console.log(find_max([3, 4, 5]))