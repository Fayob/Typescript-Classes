class Department {
    name: string;
    year: number

    constructor (n: string, y: number) {
        this.name = n
        this.year = y
    }

    greet(){
        console.log("The name of the department is : " + this.name );
        
    }
}

const Biochemistry = new Department("Biochemistry", 2021)

// Biochemistry.greet(200)

const BiochemistryCopy = {name: "Dummy", greet : Biochemistry.greet}
// BiochemistryCopy.greet() // returns undefined because this.name in the method greet in our class Biochemistry refers to BiochemistryCopy which has only the method in it instead of referring to the whole class Biochemistry.  To fix this issue this keyword must be declared as an argument in the class Biochemistry and assign the type Biochemistry (the Class Name here) to it. after the assignment, the necessary details must be supplied to the object BiochemistryCopy

BiochemistryCopy.greet()

