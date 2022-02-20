/*
Write a function called "countAllCharacters".

Given a string of characters, "countAllCharacters" returns an object where each key is a character in the given string, with its value being how many times that character appeared in the given string. If given an empty string, your function should return an empty object.

Input : String
Output : Object KEY : each character . Value : time of each characters count


*/
const countAllCharacters = (string) => {
    return [...string].reduce((acc, key, i) => {
        if (string === '') {
            return "";
        } else if (string) {

            if (acc[key] === undefined) {
                acc[key] = 1;
            } else {
                acc[key] = acc[key] + 1;
            }
        }
        return acc;
    }, {})

}
console.log(countAllCharacters('')); // '
console.log(countAllCharacters('helllo'));

