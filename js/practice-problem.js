//* problem-01
//? You have an odd array [1, 3, 5, 7, 9]. convert this array into an even array
//? do this using for loop, map(), while/for loop

//* using while loop
// const oddArr = [1, 3, 5, 7, 9];
// let i = 0;
// let even= [];
// while(i < oddArr.length){
//     even.push(oddArr[i] + 1)
//     i++;
// }
// console.log(even)

//* using map();
// console.log(oddArr.map(arr => arr + 1))

//* problem-02
//? You are given an array: [33, 50, 79, 78, 90, 101, 30]. Now returns all the elements which are divisible by 10 using array.filter();
// const arr = [33, 50, 79, 78, 90, 101, 30]
// console.log(arr.filter(num => num % 10 === 0));

//* using find()
// console.log(arr.find(num => num % 10 === 0))

//* problem-03
//? You have an array [1, 9, 17, 22]. Sum all elements of this array and give output using for loop and reduce
//* using reduce
// const arr = [1, 9, 17, 22];
// const total = arr.reduce((previous, current) => {
//     return previous + current
// }, 0);
// console.log(total)

//* using for loop
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// };
// console.log(sum)

//* problem-04
// const people = [
//     { name: 'Meena', age: 20 },
//     { name: 'Rina', age: 17 },
//     { name: 'souchorita', age: 21 }
// ];
//? find out the total sum of age value using reduce()
// const totalAge = people.reduce((previous, current) => {
//     console.log(previous, current.age)
//     return previous + current.age
// }, 0);
// console.log(totalAge)


