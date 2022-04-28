class Departments {
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

class ITDepartment extends Departments {
    admins: string[]
    constructor (id: string,  admins: string[]){
        super("IT", id)
        this.admins = admins
    }

    addEmployer (text: string){
        this.employer.push(text)
    }
}

class AccountingDepartment extends Departments {
    constructor (id: string, private report: string[]){
        super("Accounting", id)
        // this.report = report
    }

    addReport(text: string){
        this.report.push(text)
    }
    printReport(){
        console.log(this.report);
    }
}

const IT = new ITDepartment("id1", ["fayob"])
console.log(IT);

const acc = new AccountingDepartment("idIT1", [])
acc.addReport("Something Went Wrong")
acc.printReport()
console.log(acc);

IT.addEmployer("Fayob")
IT.addEmployer("G-Ben")
IT.addEmployer("Shemak")

acc.printEmployee("Max")
acc.printEmployee("Manuel")

// // accounting.employees[3] = "Susan"  // won't work like this because employee is private in our class

// accounting.printEmployeesInformation()
