/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 13 : createSecretHolder
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function createSecretHolder(secret) {
    const secretHolder = {
        getSecret: () => { console.log(secret) }, // set method getSecreet as property and value is secret from secret input;
        setSecret: (value) => { secret = value }// set method setSecret as property and value is passed input and set value equal to secret;
    };
    return secretHolder;
}
// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5)
obj.getSecret(); // => returns 5
obj.setSecret(2);
obj.getSecret(); // => returns 2


/* ========================== SOLUTION 2  ======================================
================================================================================ */
function createGreeting(name) {
    return {
        hello: () => console.log(`Hello ${name}`),
        changeName: (newName) => name = newName
    }
}
const greeting = createGreeting('Avi');
greeting.hello();
greeting.changeName('Chris');
greeting.hello();


