//* using while loop
// function getDouble(numbers) {
//     let i = 0;
//     let double = []
//     while (i < numbers.length) {
//         double.push(numbers[i] * 2)
//         i++;
//     }
//     return double;
// }
// const numbers = [25, 34, 71, 65, 85];
// console.log(getDouble(numbers))

//* map()
// console.log(numbers.map(number => number * 2))
const players = ['Sakib', 'Mahmudulla', 'Shanto', 'Nasir'];
const firstCharacter = players.map(player => player[0]);
// console.log(firstCharacter);

const products = [
    {name: 'laptop'},
    {name: 'Mobile'},
    {name: 'Monitor'},
    {name: 'Tablet'}
];
console.log(products.map(product => product.name))