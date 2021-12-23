// create function getReminder
// input : two number
// output : remainder(number)
function getRemainder(num1, num2) {
    // INSERT CODE HERE
    // check input which one is larger
    // then divied by smaller number use mod %
    // return remainder 
    // if(num1 > num2){
    //   	return num1 % num2;
    // }else{
    //     return  num2% num1;
    // }

    const larger = num1 > num2 ? num1 : num2;
    const small = num2 < num1 ? num2 : num1;
    return (larger % small)
}

// Uncomment the lines below to test your code
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0