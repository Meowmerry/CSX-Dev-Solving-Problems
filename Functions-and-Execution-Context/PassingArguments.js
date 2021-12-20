// input : function as argument
// output : boolean 
const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true
