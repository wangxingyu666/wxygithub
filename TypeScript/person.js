"use strict";
function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        greet: function () {
            return `Hello ,my name is ${this.firstName} ${this.lastName} and I am ${this.age} year old.`;
        }
    };
}
const person = createPerson('John', 'Doe', 30);
console.log(person.greet());
