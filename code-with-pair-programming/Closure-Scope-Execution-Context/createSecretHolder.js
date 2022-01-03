/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 13 : createSecretHolder
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function createSecretHolder(secret) {
    const secretHolder = {};
    secretHolder.getSecret = () => {
        return secret;
    };
    secretHolder.setSecret = (value) => {
        secret = value;
    };
    return secretHolder;
}
// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
console.log(obj.setSecret(2))
console.log(obj.getSecret()) // => returns 2
