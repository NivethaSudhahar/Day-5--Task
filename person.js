class Person {
    constructor(firstName, lastName, age, gender, interests) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    greet() {
      let prefix = '';
      if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
      } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Ms.';
      } else {
        prefix = 'Mx.'; // Mx. is a gender-neutral title
      }
      console.log(`Hello, ${prefix} ${this.lastName}.`);
    }
  
    bio() {
      console.log(`${this.getFullName()} is ${this.age} years old. They like ${this.interests.join(', ')}.`);
    }
  }
  
  // Example usage:
  let person1 = new Person('John', 'Doe', 30, 'male', ['reading', 'hiking', 'coding']);
  person1.greet(); // Outputs: Hello, Mr. Doe.
  person1.bio(); // Outputs: John Doe is 30 years old. They like reading, hiking, coding.
  