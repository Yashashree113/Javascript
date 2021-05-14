const arr=[5, 10, 3, 2];
const cumulativeSum = (sum => value => sum += value)(0);
console.log(arr.map(cumulativeSum));