const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!


const textArray: string[] = []

// generics
const numArray: Array<number> = []

// type aliases
type numOrStirng = number | string
// type objResult = { val:number; timestamp :Date;  }

// interface
interface objResult {
    val: number;
    timestamp: Date;
}

function add(num1: numOrStirng, num2: numOrStirng) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    } else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2
    } else {
        return +num1 + +num2
    }
}

function printResult(obj: objResult) {
    console.log(obj.val, obj.timestamp)
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;

    const result = add(+num1, +num2)
    numArray.push(result as number)

    const stringResult = add(num1, num2)
    textArray.push(stringResult as string)

    printResult({ val: result as number, timestamp: new Date() })
    console.log(result)
    console.log(stringResult)
    console.log(numArray, textArray)
})

// generics in Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('its worked!')
    }, 1000)
})

myPromise.then((result) => {
    console.log(result)
})