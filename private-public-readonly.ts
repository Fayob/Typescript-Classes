class AccDepartments {
    // private readonly id: string
    // readonly id: number
    // year: number
    name: string;
    private employees: string[] = []

    constructor(n: string, readonly id: number, public year: number = 2022){
        this.name = n
        this.id = id
        this.year = year
        }

    printEmployee (employee: string){
        this.employees.push(employee) 
        console.log(employee + ", an " + this.name + " student");
        }

    printEmployeesInformation(){
        console.log(this.employees);
        console.log(this.employees.length);
            
        }

}

const accounting = new AccDepartments("Accounting", 3456)
// const accounting1 = new Departments("Accounting", "id2")
console.log(accounting);
// console.log(accounting1);

accounting.printEmployee("Max")
accounting.printEmployee("Manuel")

// accounting.employees[3] = "Susan"  // won't work like this because employee is private in our class

accounting.printEmployeesInformation()
