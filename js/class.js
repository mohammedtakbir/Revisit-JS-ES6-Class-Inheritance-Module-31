class Instructor {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location
    }
    designation = 'web course instructor';
    team = 'web team';
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    };
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    };
};
// const person1 = new Instructor();
const person1 = new Instructor('Abdur Rahim', "Dhaka");
console.log(person1)
person1.createQuiz('60');
person1.startSupportSession('10:00AM')