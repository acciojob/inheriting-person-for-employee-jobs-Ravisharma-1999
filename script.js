// Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Employee Class
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the constructor of the Person class
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Attach classes to the global window object for Cypress tests
window.Person = Person;
window.Employee = Employee;
