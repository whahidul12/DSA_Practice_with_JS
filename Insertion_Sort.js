"use strict";

console.time("time: ");
function InsertSort(myArr) {
    for (let i = 0; i < myArr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < myArr.length; j++) {
            if (myArr[i] > myArr[j]) {

            }
        }
    }
}
let myArr = [7, 12, 9, 11, 3, -2];
InsertSort(myArr);
console.log(myArr);
console.timeEnd("time: ");