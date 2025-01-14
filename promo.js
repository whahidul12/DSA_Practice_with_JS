"use strict";

function Iteretor(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    hasLeft: true
                }
            }
            else {
                return {
                    hasLeft: false
                }
            }
        }
    }
}

const myArr = ['apple', 'Grape', 'orange', 'bhindi'];

const got = Iteretor(myArr);

while (got.next().value !== undefined) {
    console.log(got.next().value);
}




