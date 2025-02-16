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

/* const userInput = prompt("Type anything and I will count the vowels inside") */
const userInput = "banane e arzigugoli a forma di banane"
console.log("You wrote: " + userInput);

function countVowels(string) {
    const As = string.match(/a/gi);
    const Es = string.match(/e/gi);
    const Is = string.match(/i/gi);
    const Os = string.match(/o/gi);
    const Us = string.match(/u/gi);

    console.log(As, Es, Is, Os, Us);

    return As.length + Es.length + Is.length + Os.length + Us.length
}

const numVowels = countVowels(userInput)
console.log("The number of vowels of what you wrote is: " + numVowels);

/* ################################################### */
console.log();
console.log("ESERCIZIO 3");

const userArr = ["Ajo", "Eja", "Mischino", "Inugru", "Tamatta", "Marragocco", "Eliga"]
console.log("Your array is: ", userArr);

function invertArray(arr) {
    const invertedArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        const revertWords = arr[i];
        invertedArr.push(revertWords)
    }
    return invertedArr
}

const revertUserArr = invertArray(userArr)
console.log("The reverted array is: ", revertUserArr);

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


