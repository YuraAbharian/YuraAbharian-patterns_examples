class Employee {
    constructor(name, salary, experience){
        this.name = name;
        this.salary = salary;
        this.exprerience = experience;
    }

    getPaid(){
        return `${this.name} earns ${this.salary}$`
    }

    getCV(){}
    getResponsibilities(){}
}

class Developer extends Employee {
    constructor(name, salary, experience){
        super(name, salary, experience);
        this.name = name;
        this.exprerience = experience;
    }
    getCV(){
        return `${this.name} is developer with mo then ${this.exprerience} year/years of experience.`
    }
    getResponsibilities(){
        return `${this.name} creates very powerful programs!`
    }
}
class Tester extends Employee {
    constructor(name, salary, experience){
        super(name, salary, experience);
        this.name = name;
        this.exprerience = experience;
    }
    getCV(){
        return `${this.name} is tester with mo then ${this.exprerience} year/years of experience.`
    }
    getResponsibilities(){
        return `${this.name} tests fast and clear!!!`
    }
}

const dev = new Developer('Yura', 4000, 4);
const tester = new Tester('Anton', 5000, 5);

console.log('dev: ', dev.getCV());
console.log('dev: ', dev.getResponsibilities());
console.log('dev: ', dev.getPaid());
console.log('tester: ', tester.getCV());
console.log('tester: ', tester.getResponsibilities());
console.log('tester: ', tester.getPaid());