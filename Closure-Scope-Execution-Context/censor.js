/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: censor
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
// create a function censor that accepts no arguments;
const censor = () => {
    // create a vaiable cache to store key value pairs;
    const cache = {};
    // return a function that takes up to  two arguments
    return (str1, str2) => {
        // check to see how many strings are passed in to the returned function 
        if (str2) {
            // if two string are passed in, add to cached objects as a key value pair
            cache[str1] = str2;
            return;
        }
        // console.log(cache)
        // if one string is passed in, modify the string to replace any instance of the keys in the cache with the corresponding values in the cache;
        Object.keys(cache).forEach(key => {

            str1 = str1.replace(key, cache[key])
        })
        // then return the modified string;
        return str1;
    };
};
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

/* ========================== SOLUTION  2  ======================================
================================================================================ */

function censor2() {
    const strings = [];
    return function (str1, str2) {
        if (str2) {
            const pairs = {};
            pairs[str1] = str2;
            strings.push(pairs);
        }
        if (!str2) {
            const replaceStrings = (arrOfPairs, string) =>
                arrOfPairs.reduce(
                    (string, ele) =>
                        string.replace(Object.keys(ele), ele[Object.keys(ele)]),
                    string
                );
            return replaceStrings(strings, str1);
        }
    };
}
const changeScene2 = censor2();
changeScene2('dogs', 'cats');
changeScene2('quick', 'slow');
console.log(changeScene2('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
/* ========================== SOLUTION  3  ======================================
================================================================================ */

function censor3() {
    const strings = [];
    return function (str1, str2) {
        if (str2) {
            const pairs = {};
            pairs[str1] = str2;
            strings.push(pairs);
        }
        if (!str2) {
            const replacer = (arrOfPairs, string) =>
                arrOfPairs.reduce((string, ele) => {
                    return string.replace(
                        Object.entries(ele)[0][0],
                        Object.entries(ele)[0][1]
                    );
                }, string);
            return replacer(strings, str1);
        }
    };
}
const changeScene3 = censor3();
changeScene3('dogs', 'cats');
changeScene3('quick', 'slow');
console.log(changeScene3('The quick, brown fox jumps over the lazy dogs.'));

/* ========================== SOLUTION  4  ======================================
================================================================================ */
function censor4() {
    const strings = [];
    return function (str1, str2) {
        if (str2) {
            const pairs = {};
            pairs[str1] = str2;
            strings.push(pairs);
        }
        // console.log(strings)
        if (str2 === undefined) {
            return strings.reduce(
                (str1, ele) => str1.replaceAll(Object.keys(ele), ele[Object.keys(ele)]),
                str1
            );
        }
    };
}
const changeScene4 = censor4();
changeScene4('dogs', 'cats');
changeScene4('quick', 'slow');
console.log(changeScene4('The quick, brown fox jumps over the lazy dogs.'));

/* ========================== SOLUTION  5  ======================================
================================================================================ */
function censor5() {
    const pairs = {};
    return function (str1, str2) {
        if (str2) {
            pairs[str1] = str2;
        }
        if (!str2) {
            const reg = new RegExp(Object.keys(pairs).join('|'), 'g');
            return str1.replace(reg, function (match) {
                return pairs[match];
            });
        }
    };
}
const changeScene5 = censor5();
changeScene5('dogs', 'cats');
changeScene5('quick', 'slow');
console.log(changeScene5('The quick, brown fox jumps over the lazy dogs.'));

/* ========================== SOLUTION  6  ======================================
================================================================================ */
function censor6() {
    const pairs = {};
    return function (str1, str2) {
        if (str2) {
            pairs[str1] = str2;
        } else {
            for (const key of Object.keys(pairs)) {
                str1 = str1.replace(key, pairs[key])
            }
            return str1;
        }
    }
}
const changeScene6 = censor6();
changeScene6('dogs', 'cats');
changeScene6('quick', 'slow');
console.log(changeScene6('The quick, brown fox jumps over the lazy dogs.'));

/* ========================== SOLUTION  7  ======================================
================================================================================ */
const censor7 = () => {
    const pairs = {};
    return (str1, str2) =>
        str2
            ? ((pairs[str1] = str2), undefined)
            : (Object.keys(pairs).forEach(
                (key) => (str1 = str1.replaceAll(key, pairs[key]))
            ),
                str1);
};
const changeScene7 = censor7();
changeScene7('dogs', 'cats');
changeScene7('quick', 'slow');
console.log(changeScene7('The quick, brown fox jumps over the lazy dogs.'));

/* ========================== SOLUTION  8  ======================================
================================================================================ */
function censor8() {
    const pairs = {};
    return function (str1, str2) {
        if (str2) {
            pairs[str1] = str2;
        } else {
            Object.keys(pairs).forEach((key) => {
                str1 = str1.replace(key, pairs[key]);
            });
            return str1;
        }
    };
}
const changeScene8 = censor8();
changeScene8('dogs', 'cats');
changeScene8('quick', 'slow');
console.log(changeScene8('The quick, brown fox jumps over the lazy dogs.'));

/* ========================== SOLUTION  9  ======================================
================================================================================ */
function censor9() {
    const pairs = {};
    return function (str1, str2) {
        if (str2) {
            pairs[str1] = str2;
        } else {
            Object.keys(pairs).forEach((key) => {
                const regex = new RegExp(key, 'g');
                str1 = str1.replace(regex, pairs[key]);
            });
            return str1;
        }
    };
}
const changeScene9 = censor9();
changeScene9('dogs', 'cats');
changeScene9('quick', 'slow');
console.log(changeScene9('The quick, brown fox jumps over the lazy dogs.'));

/* ========================== SOLUTION  10  ======================================
================================================================================ */
function censor10() {
    // create a variable cache to store key, value pair assign to empty {};
    const cache = {};
    // return a function that takes up to two arguments
    return (strOne, strTwo) => {
        // check to see how many strings are passed in to the return function;
        if (strTwo) {
            // if two strings are passed in, add to cache object as a key value pair
            cache[strOne] = strTwo;
            // return nothing;
            return;
        }
        // if one string passed in, modify the string to replace any instance of the keys in the cache with corresponding values in the cache
        for (let key in cache) {
            strOne = strOne.replace(key, cache[key])
        }
        // return the modified string;
        return strOne;
    };
};
const changeScene10 = censor10();
changeScene10('dogs', 'cats');
changeScene10('quick', 'slow');
console.log(changeScene10('The quick, brown fox jumps over the lazy dogs.'));


