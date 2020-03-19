class Car {
    constructor(model, price){
        this.model = model;
        this.price = price;
    }
}


class CarFactory {
    constructor(){
        this.cars = [];
    }
    create(model, price){

        const newCar = this.getCar(model);

        if(newCar) {
            return newCar;
        }
        const car = new Car(model, price);
        this.cars.push(car);
        return car;
    }
    getCar(model){
        return this.cars.find(el=> el.model === model);
    }
    getCars(){
        return this.cars;
    }
}

const car = new CarFactory();

const bmw = car.create('bmw', 10000);
const audi = car.create('audi', 8000);
const audi2 = car.create('audi', 15000);
const nisan = car.create('nisan', 6000);
const allCars = car.getCars();

console.log("bmw: ", bmw);
console.log("audi: ", audi);
console.log("audi2: ", audi2);
console.log("nisan: ", nisan);
console.log('allCars: ', allCars);