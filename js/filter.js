//* filter()
const numbers = [29, 47, 58, 63, 94, 19, 50];
console.log(numbers.filter(num => num % 2 === 0))
console.log(numbers.filter(num => num % 2 > 0))
console.log(numbers.filter(number => number > 50))