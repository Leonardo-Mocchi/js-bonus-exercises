console.log("ESERCIZIO 1");

const numsArr = [1, 20, 30, 5, 95, 10000, -70, 20569, 999];
const numArrMax = trovaMassimo(numsArr);

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

function randomGen(n, min, max) {
    randArr = []
    for (let i = 0; i < n; i++) {
        let randVal = Math.floor(Math.random() * (max - min + 1)) + min
        randArr.push(randVal)
    }
    return randArr
}

// to ask a user to insert values
/* const userNumONumbers = Number(prompt("Insert how many random numbers you want to generate"))
const userArrMin = Number(prompt("Insert a min value"))
const userArrMax = Number(prompt("Insert a max value"))
const userRandArr = randomGen(userNumONumbers, userArrMin, userArrMax) 
console.log("Your random array is: ", userRandArr);   */

// some aribtrary values
const randomArr = randomGen(5, 1, 100)
console.log("Your random array is: ", randomArr);

/* ################################################### */
console.log();
console.log("ESERCIZIO 5");

/* const numsArr = [1, 20, 30, 5, 95, 10000, -70, 20569, 999]; */
console.log("Your Array is: ", numsArr);

function checkAboveX(numArr, x) {
    let aboveXArr = [];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > x) {
            aboveXArr.push(numArr[i])
        }
    }
    return aboveXArr;
}
const lowerLimit = 100;
const aboveLwrLim = checkAboveX(numsArr, lowerLimit)
console.log("The numbers in your array above ", lowerLimit, " is ", aboveLwrLim);

/* ################################################### */
console.log();
console.log("ESERCIZIO 6");

const yourString = "I topi non avevano nipoti perché non avevano fratelli né sorelle"
const biggestWordInString = longestWord(yourString)

function longestWord(string) {
    let stringArr = string.split(" ");
    let longest = [];
    for (i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > longest.length) {
            longest = stringArr[i]
        }
    }
    return longest
}

console.log("The longest word in your sentence is: " + biggestWordInString);

/* ################################################### */
console.log();
console.log("ESERCIZIO 7");

/* const numsArr = [1, 20, 30, 5, 95, 10000, -70, 20569, 999]; */
const numsArr2 = [69, 420, 42, 72, 666];
console.log("Your arrays are ", numsArr, " and ", numsArr2);
const ordered_n_mixed_Arr = mixNOrder2Arrs(numsArr, numsArr2)


function mixNOrder2Arrs(arr1, arr2) {
    const mixedArr = []
    for (let i = 0; i < arr1.length; i++) {
        mixedArr.push(arr1[i])
    }
    //mix arr1
    for (let index = 0; index < arr2.length; index++) {
        mixedArr.push(arr2[index])
    }
    // mix arr2
    const orderedArr = mixedArr.sort(function (a, b) { return a - b })
    return orderedArr
}

console.log("The array that mixes and orderes yours is ", ordered_n_mixed_Arr);

/* ################################################### */
console.log();
console.log("ESERCIZIO 8");

/* const yourString = "I topi non avevano nipoti perché non avevano fratelli né sorelle" */
const yourArr = yourString.split(" ")
console.log(yourArr);
const value2Count = "nipoti"

const occurrences = countOccurrences(yourArr, value2Count)

function countOccurrences(arr, val) {
    let occ = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            occ += 1
        }
    }
    return occ
}

console.log("The word", value2Count, "has", occurrences, " occurrences in your sentence (", yourString, ")");

/* ################################################### */
console.log();
console.log("ESERCIZIO 9");

/* const yourString = "I topi non avevano nipoti, perché non avevano fratelli né sorelle" 
const yourArr = yourString.split(" ") */

function removeDupes(arr) {
    let noDupes = []
    for (let i = arr.length - 1; i >= 0; i--) {
        noDupes.push(arr[i])
        console.log(arr[i]);

        for (let index = 0; index < i; index++) {
            console.log("LOL", arr[i]);

            console.log("xxx", arr[index]);
            if (arr[i] === arr[index]) {
                noDupes.pop(arr[i])
            }
        }
    }
    return noDupes.reverse()
}

const noDupesArr = removeDupes(yourArr)

console.log("Your array is:", yourArr);
console.log("Your array without duplicates is:", noDupesArr);