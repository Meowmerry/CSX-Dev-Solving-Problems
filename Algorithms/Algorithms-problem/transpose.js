/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/
/*
Create fun transpose that accepts a two dimensional array 
    declear a newArr assign to empty array
        iterate thru array at the first array input use a for loop  
            declare a subArr assign to empty array
                iterate thru array use a for loop
                    compare outter array with inner array if same index 
                        pusing to subarray 
            pushing subarray to newArr
return new array
*/
const transpose = (arr)=>{
    const newArr = [];
    for(let i = 0 ; i < arr[0].length ; i += 1){
        const subArr = [];
        for(let j = 0 ; j < arr.length ; j += 1){   
            subArr.push(arr[j][i])
        }
        newArr.push(subArr)
    }
    return newArr;
}
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]