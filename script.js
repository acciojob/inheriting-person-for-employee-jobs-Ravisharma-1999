// Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    }
}

// Employee Class
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the constructor of the Person class
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
    }
}

// DOM Elements
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const jobTitleInput = document.getElementById('jobTitle');
const outputDiv = document.getElementById('output');

// Event Listeners
document.getElementById('createPerson').addEventListener('click', () => {
    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    if (name && age) {
        const person = new Person(name, age);
        outputDiv.innerHTML = `<p>${person.greet()}</p>`;
    } else {
        outputDiv.innerHTML = `<p>Please enter both name and age for the person.</p>`;
    }
});

document.getElementById('createEmployee').addEventListener('click', () => {
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const jobTitle = jobTitleInput.value;

    if (name && age && jobTitle) {
        const employee = new Employee(name, age, jobTitle);
        outputDiv.innerHTML = `<p>${employee.jobGreet()}</p>`;
    } else {
        outputDiv.innerHTML = `<p>Please enter name, age, and job title for the employee.</p>`;
    }
});
