var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var textArray = [];
// generics
var numArray = [];
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
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    numArray.push(result);
    var stringResult = add(num1, num2);
    textArray.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(result);
    console.log(stringResult);
    console.log(numArray, textArray);
});
// generics in Promise
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('its worked!');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result);
});
