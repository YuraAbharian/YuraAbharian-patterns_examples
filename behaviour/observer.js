class Observer {
    constructor(){
        this.subscribers = [];
    }

    subscribe(subscriber){
        this.subscribers.push(subscriber);
    }
    unsubscribe(subscriber){
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
    }

    emit(action){
        this.subscribers.forEach(subscriber => {
            subscriber.update(action)
        })
    }
}




class Subscriber {
    constructor(state = 0){
        this.state = state;
        this.initialState = state;
    }

    update(action){
        switch (action.type) {

            case 'increment':
                this.state = ++this.state;
                break;
            case 'decrement':
                this.state = --this.state;
                break;
            case 'add':
                this.state += action.payload;
                break;
            default:
                this.state = this.initialState;
        }
    }
}
const observer$ = new Observer();
const sub1 = new Subscriber();
const sub2 = new Subscriber(15);

observer$.subscribe(sub1);
observer$.subscribe(sub2);
observer$.emit({type: 'decrement'});
observer$.emit({type: 'decrement'});
observer$.emit({type: 'increment'});
observer$.emit({type: 'add', payload: 26});

console.log(sub1.state);
console.log(sub2.state);
