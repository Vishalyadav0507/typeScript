"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const textArray = [];
// generics
const numArray = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(obj) {
    console.log(obj.val, obj.timestamp);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numArray.push(result);
    const stringResult = add(num1, num2);
    textArray.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(result);
    console.log(stringResult);
    console.log(numArray, textArray);
});
// generics in Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('its worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
