/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 16
Create a function goodKeys that accepts an object and a callback. 
The callback will return either true or false. 
goodKeys will iterate through the object and perform the callback on each value. 
goodKeys will then return an array consisting only the keys whose 
associated values yielded a true return value from the callback.*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
/*
Input : Object and callback
Output : Array with Key
create a func take object and callback
	declare a rusult variable assign to empty array
  	iterate thru object use a for in loop
    	check if invoke callback passed current object value 
      			if true adding to result
            
  return result
*/
function goodKeys(obj, callback) {
  const result = [];
  for (let key in obj) {
    if (callback(obj[key])) {
      result.push(key);
    }
  }
  return result;
}

const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
