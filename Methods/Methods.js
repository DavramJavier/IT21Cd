//Inputs
const person = {
    name: "Davram A. Javier",
    age: 20,
    occupation: "Student"
}
    //Process and Output
     console.log("Name: " + this.name);
     console.log("Age: "  + this.age);
     console.log("occupation: " + this.occupation);

//Class named Person
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    //Solution 1: Display via console.log
    displayInfo() { 
        console.log("Name: " + this.name);
        console.log("Age: "  + this.age);
        console.log("occupation: " + this.occupation);
    }

}
 // Create an instance of Person
 const person1 = new Person("Davram A. Javier", 20, "Student");

 //Calls the method
 person1.displayInfo();
