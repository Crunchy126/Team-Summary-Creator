//OBJECT
//object consists of properties and methods
//properties are variables in the object
//methods are functions in an object

//CONSTRUCTOR
//Function to reuse objects

class Employee {
    constructor (name,id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole () {
        return "Employee"
    }

}

module.exports = Employee;