class MyMath {
    constructor(initialValue = 0){
        this.value = initialValue;
    }

    square(){
        return this.value ** 2;
    }
    cube(){
        return this.value ** 3;
    }
}

class Command {
    constructor(target){
        this.target = target;
        this.commandHistory = [];
    }
    execute(command){
        this.commandHistory.push(command);
        return this.target[command]();
    }
    history(){
        return this.commandHistory;
    }

}

const cmd1 = new Command(new MyMath(2));
const cmd2 = new Command( new MyMath(3));

console.log('cmd1: ', cmd1.execute('square'));
console.log('cmd2: ', cmd2.execute('cube'));
console.log('cmd2: ', cmd2.execute('square'));
console.log('history: ', cmd2.history());