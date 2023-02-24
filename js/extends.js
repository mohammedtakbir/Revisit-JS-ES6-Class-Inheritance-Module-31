
//* common class
class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    };
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback!!!`)
    }
}

class Instructor extends TeamMember {
    designation = 'web course instructor';
    team = 'web team';
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    };
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    };
};
class Developer extends TeamMember {
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    designation = 'web developer';
    team = 'web team';
    developeFeature(feature) {
        console.log(`please develop the ${feature}`)
    };
    release(version) {
        console.log(`please release the version ${version}`)
    };
};
class JobPlacement extends TeamMember {
    region;
    constructor(name, location, region) {
        super(name, location)
        this.region = region
    }
    designation = 'job placement commandos';
    team = 'web team';
    provideResume(feature) {
        console.log(`please develop the ${feature}`)
    };
    release(version) {
        console.log(`please release the version ${version}`)
    };
};
const instructor1 = new Instructor('mohammed', 'Dhaka');
const developer1 = new Developer('takbir', 'Narayanganj', 'MERN');
const jobPlacement1 = new JobPlacement('X', 'y', 'F');
console.log(instructor1, developer1, jobPlacement1);
instructor1.provideFeedback();
developer1.provideFeedback();
jobPlacement1.provideFeedback();