
const car = {
  wheels: 4,
  init(){
        console.log(`I have ${this.wheels} wheels. My owner is ${this.owner}`)
  }
};

const carWitOwner = Object.create(car, {
    owner: {
    value: "Yura"}
});

console.log(carWitOwner.__proto__ === car);

carWitOwner.init();