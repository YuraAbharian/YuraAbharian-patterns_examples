class MyIterator {
    constructor(data){
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator](){
       return {
           next: ()=>{
               if (this.index < this.data.length){
                   return {
                       value: this.data[this.index++],
                       done: false,
                   }
               } else {
                   this.index = 0;
                   return {
                       value: void 0,
                       done: true,
                   }
               }
           }
       }
    }
}

const iterator = new MyIterator(['one', 'two', 'three']);
 for (let key of iterator){
      console.log(key)
 }

 function* generator(collection) {
     let index = 0;
     while (index < collection.length) {
         yield collection[index++]
     }
 }

 const gen = generator(['one', 'two', 'three']);

for (let key of gen){
    console.log(key)
}