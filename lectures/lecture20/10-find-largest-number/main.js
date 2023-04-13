const numbers = [65, 1800, 12, 20, 1963, 5000, 260, 0, 40, 953, 775, 67, 33];

// your code here:
let biggestNumberSoFar = numbers[0];
for (let i = 0; i > numbers.length; i++) {
    if (numbers[i] > biggestNumberSoFar) {
        biggestNumberSoFar = numbers[i];
    }
}

console.log(biggestNumberSoFar);