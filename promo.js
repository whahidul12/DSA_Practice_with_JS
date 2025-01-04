"use strict";

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
function Pperson(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Person Objects
const myFather = new Pperson("John", "Doe", 50, "blue");
const myMother = new Pperson("Sally", "Rally", 48, "green");

// Add a new Property
Person.nationality = "English";





