class Light {
    constructor(light){
        this.light = light;
    }
}

class RedLight extends Light{
    constructor(){
        super('red')
    }
    sign() {
        return 'STOP'
    }
}
class YellowLight extends Light{
    constructor(){
        super('yellow')
    }
    sign() {
        return 'READY'
    }
}
class GreenLight extends Light{
    constructor(){
        super('green')
    }
    sign() {
        return 'DRIVE'
    }
}

class TrafficSwitcher {
    constructor(){
        this.state = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ];
        this.defaultPosition = this.state[0];
    }

    change(){
        let index =  this.state.findIndex(light => light ===  this.defaultPosition);
        const state = this.state.length;

        if( index + 1 < state){
            this.defaultPosition = this.state[index + 1]
        } else {
            this.defaultPosition = this.state[0]
        }
        return  this.defaultPosition.light
    }
    sign(){
        return this.defaultPosition.sign();
    }
}

const traffic = new TrafficSwitcher();

console.log(traffic.change());
console.log(traffic.sign());
console.log(traffic.change());
console.log(traffic.sign());console.log(traffic.change());
console.log(traffic.sign());