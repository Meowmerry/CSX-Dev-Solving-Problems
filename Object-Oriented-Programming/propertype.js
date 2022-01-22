function Person() {
    this.name = 'Amy';
    this.age = 28;
}
Person.prototype.job = 'Programmer';
Person.prototype.showName = function () {
    console.log('My name is ' + this.name);
}
let person = new Person();
person.showName(); // My name is Amy
console.log(person.job)