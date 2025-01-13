"use strict";

const Person = {
    name: "whahidul islam",
    age: 21,
    sex: "male",
    eat: () => {
        console.log("he is eating");

    },
    walk: () => {
        console.log("he is walking");

    },
    sleep: function () {
        console.log("sleeping...");

    }

}

console.log(Person);

Person.age = 22;
console.log(Person);






