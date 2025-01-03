"use strict";

class anoObj {
    constructor(nam, age) {
        this.name = {
            firstname: "Whahidul",
            lastname: "Islam"
        };
        this.age = age;
        this.gender = "male";
        this.email = "email@m.com";
        this.sleep = function sleep() {
            return console.log(`${this.name.firstname} ${this.name.lastname} is sleeping...zzz`);
        };
        this.drive = function drive() {
            return console.log(`${this.name.firstname} ${this.name.lastname} is ${this.age} years old and ${nam}`);
        };
    }
}

const jack = new anoObj("pizza", 19);
console.log(jack.drive());

