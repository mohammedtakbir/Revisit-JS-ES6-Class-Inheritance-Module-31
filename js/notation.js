const student = {
    name: 'mohammed takbir',
    marks: {
        accounting: 81,
        finance: 89,
        business: 78
    }
}
const subject = 'business';
// console.log(student.marks.accounting) //? dot notation
// console.log(student['marks']['business']) //? bracket er moddhe property string akare value access kora jay
console.log(student['marks'][subject]); //? property name jodi variable er moddhe thake