class OldCalc {
    operation(t1, t2, action){
        switch (action) {

            case 'add':
                return t1 + t2;
            case 'sub':
                return t1 - t2;
            default:
                return NaN;
        }
    }
}
console.log('OldCalc: ', new OldCalc().operation(2,3,'sub'));

class NewCalc {
    add(t1, t2){
        return t1 + t2
    }
    sub(t1, t2){
        return t1 - t2
    }
}

console.log('NewCalc: ', new NewCalc().add(2, 1));

class AdapterCalc {
    constructor(){
        this.calc = new NewCalc()
    }

    operation(t1, t2, action){
        switch (action) {
            case 'add':
                return this.calc.add(t1, t2);
            case 'sub':
                return this.calc.sub(t1, t2);
            default:
                return NaN;
        }
    }
}

console.log('AdapterCalc: ', new AdapterCalc().operation(25, 10, 'sub'));