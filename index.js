class  Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`${this.name} says Hello!`);
    }
}

const guy1 = new Person('Peter', 33);
const guy2 = new Person('John', 45);


