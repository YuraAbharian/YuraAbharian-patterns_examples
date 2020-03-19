class User {
    constructor(name){
        this.name = name;
        this.room = null;
        }
     send(message, to){
       return this.room.send(message, this, to);
     }

     receive(message, from){
        return console.log(` FROM : ${from.name} TO: => ${this.name} MESSAGE: ${message}.`);
     }
}

class ChatRoom {
    constructor(){
        this.users = {};
    }

    register(user){
         this.users[user.name] = user;
         user.room = this;
         return null
    }
    send(message, from, to){
        if(to){
            return  to.receive(message, from);

        } else {
             Object.keys(this.users).forEach( key => {
                if( this.users[key] !== from ){
                 return  this.users[key].receive(message, from);
                }
            });
            return null
        }
    }
}

const Yura = new User('Yura');
const Adelina = new User('Adelina');
const Armen = new User('Armen');

const chat = new ChatRoom();

chat.register(Yura);
chat.register(Adelina);
chat.register(Armen);

console.log(Yura.send('Hello', Armen));
console.log(Armen.send('Hello, Bro', Yura));
console.log(Adelina.send('Pa pa pa pa'));
