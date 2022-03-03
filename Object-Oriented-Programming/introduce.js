/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: introduce
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
const personStore = {
    greet: function () {
        console.log('hello');
    },
    introduce: function () {
        console.log(`Hi, my name is ${this.name}`);
    }
}

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;

    return person;
}

const sandra = personFromPersonStore('Sandra', 26);
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'