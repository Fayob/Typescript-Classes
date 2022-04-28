class SomeDepartments {
    // private readonly id: string
    // year: number
    name: string;
    private employees: string[] = []
    protected employer: string[] = []

    constructor(n: string, private readonly id: string, public year: number = 2022){
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

class TechDepartment extends SomeDepartments {
    admins: string[]
    constructor (id: string,  admins: string[]){
        super("IT", id)
        this.admins = admins
    }

    addEmployer (text: string){
        this.employer.push(text)
    }
}

class BankingDepartment extends SomeDepartments {
    private lastReport: string

    get mostRecentReport () {
        if (this.lastReport){
            return this.lastReport
        }
        throw new Error("No Report Found...")
    }

    set mostRecentReport(value){
        if(!value){
            throw new Error("Please provide a value")
        }
        this.addReport(value)
    }

    constructor (id: string, private report: string[]){
        super("Accounting", id)
        // this.report = report
        this.lastReport = report[0]   
     }

    addReport(text: string){
        this.report.push(text)
        this.lastReport = text
    }
    printReport(){
        console.log(this.report);
    }
}

const Tech = new TechDepartment("id1", ["fayob"])
console.log(Tech);

const banking = new BankingDepartment("idIT1", [])

banking.addReport("Something Went Wrong")
console.log(banking.mostRecentReport);
banking.mostRecentReport = "value"

banking.printReport()
console.log(banking);

Tech.addEmployer("Fayob")
Tech.addEmployer("G-Ben")
Tech.addEmployer("Shemak")

banking.printEmployee("Max")
banking.printEmployee("Manuel")

// // accounting.employees[3] = "Susan"  // won't work like this because employee is private in our class

// accounting.printEmployeesInformation()
