class SomeDepartment {
    // private readonly id: string
    // year: number
    name: string;
    static fiscalYear: number = 2022
    private employees: string[] = []
    protected employer: string[] = []

    constructor(n: string, private readonly id: string, public year: number = 2022){
        this.name = n
        this.id = id
        this.year = year
        // console.log(SomeDepartment.fiscalYear); // static properties can't be accessed as an instance but as a property directly on the class (like the commented console log above)
        }

    printEmployee (employee: string){
        this.employees.push(employee) 
        console.log(employee + ", an " + this.name + " student");
        }

    printEmployeesInformation(){
        console.log(this.employees);
        console.log(this.employees.length);
            
        }
    static createEmployer (name: string) {
            return {name}
        }

} 

class TechDepartments extends SomeDepartment {
    admins: string[]
    constructor (id: string,  admins: string[]){
        super("IT", id)
        this.admins = admins
    }

    addEmployer (text: string){
        this.employer.push(text)
    }

    static createEmployee (name: string) {
        return {name}
    }
}
 
const newEmployer = SomeDepartment.createEmployer("Fayob")
const newEmployee = TechDepartments.createEmployee("Fayob")
console.log(newEmployee, SomeDepartment.fiscalYear);
