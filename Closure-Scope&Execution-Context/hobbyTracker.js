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
// const hobbyTracker2 = (hobbies) => {

// }

// // Uncomment the code below to check your code:
// const updateHobbies2 = hobbyTracker2(['yoga', 'baking', 'piano']);
// updateHobbies2('yoga', 2);
// updateHobbies2('baking', 4);
// updateHobbies2('yoga', 1);
// console.log(updateHobbies2('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies2()); // --> 'tracker has been reset!'
// console.log(updateHobbies2('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}