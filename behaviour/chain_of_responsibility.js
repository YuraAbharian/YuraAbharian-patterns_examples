class MySum {
    constructor(initialValue = 0){
        this.value = initialValue;
    }
    add(value){
        this.value += value;
        return this;
    }
}

const calc1 = new MySum();
console.log(calc1.add(5).add(5));
const calc2 = new MySum();
console.log(calc2.add(10).add(10));