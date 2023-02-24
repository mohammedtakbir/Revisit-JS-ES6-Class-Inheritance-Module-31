const numbers = [1, 2, 3, 4, 5];

//* with initial value
const total = numbers.reduce((previous, current) => {
    return previous + current
}, 0);
console.log(total);

//* without initial value
const total2 = numbers.reduce((accumulator, elementValue) => {
    console.log(accumulator, elementValue)
    return accumulator + elementValue
})
console.log(total2)