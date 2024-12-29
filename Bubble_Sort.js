"use strict";

console.time("time: ");
function BubbleSort(myArr) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < myArr.length; i++) {
            if (myArr[i] > myArr[i + 1]) {
                let temp = myArr[i];
                myArr[i] = myArr[i + 1];
                myArr[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
}
let myArr = [7, 12, 9, 11, 3, -2];
BubbleSort(myArr);
console.log(myArr);
console.timeEnd("time: ");

//Big O = O(n^2);