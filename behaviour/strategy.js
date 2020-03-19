class Vehicle {
    travelTime(){
        return this.timeTaken
    }
}

class Bus extends Vehicle {
    constructor(){
        super();
        this.timeTaken = 15
    }
}
class Taxi extends Vehicle {
    constructor(){
        super();
        this.timeTaken = 10
    }
}
class Car extends Vehicle {
    constructor(){
        super();
        this.timeTaken = 5
    }
}

class Commute {
    constructor(transport){
        this.transport = transport;
    }
    travel(){
        return this.transport.travelTime()
    }
}
const carCommute = new Commute(new Car());
const basCommute = new Commute(new Bus());
const taxiCommute = new Commute(new Taxi());
console.log(carCommute.travel());
console.log(taxiCommute.travel());
console.log(basCommute.travel());