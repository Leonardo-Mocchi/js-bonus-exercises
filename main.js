console.log("ESERCIZIO 1");

const numericalArr = [1, 20, 30, 5, 95, 10000, -70, 20569, 999];
const numArrMax = trovaMassimo(numericalArr);

function trovaMassimo(arr) {
    let maxNum = [-Infinity];   // VERY weird, but without this i don't have a bottom value to start from, because if maxNum=[0] or maxNum=[] and if the array has only negative values, the functions registers 0 as the max value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
            /* console.log(arr[i], maxNum); */  // enable to see how the function works
        }
    }
    return maxNum
}

console.log("The maximum number of the array is: " + numArrMax);

/* ################################################### */
console.log();
console.log("ESERCIZIO 2");

/* let userInput = prompt("Type anything and I will count the vowels inside") */
let userInput = "banane e arzigugoli a forma di banane"
console.log("You wrote: " + userInput);

function countVowels(string) {
    let As = string.match(/a/gi);
    let Es = string.match(/e/gi);
    let Is = string.match(/i/gi);
    let Os = string.match(/o/gi);
    let Us = string.match(/u/gi);

    console.log(As, Es, Is, Os, Us);

    return As.length + Es.length + Is.length + Os.length + Us.length
}

let numVowels = countVowels(userInput)
console.log("The number of vowels of what you wrote is: " + numVowels);

/* ################################################### */
console.log();
console.log("ESERCIZIO 3");



/* ################################################### */
console.log();
console.log("ESERCIZIO 4");



/* ################################################### */
console.log();
console.log("ESERCIZIO 5");



/* ################################################### */
console.log();
console.log("ESERCIZIO 6");



/* ################################################### */
console.log();
console.log("ESERCIZIO 7");



/* ################################################### */
console.log();
console.log("ESERCIZIO 8");



/* ################################################### */
console.log();
console.log("ESERCIZIO 9");


