const Builder = require("./index.js");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.friends = [];
    }

    hello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const PersonBuilder = Builder(() => new Person(null, null), {
    setName: (person, name) => person.name = name,
    setAge: (person, age) => person.age = age,
    addFriend: (person, friend) => person.friends.push(friend)
});

const john = PersonBuilder.init()
    .setName("John")
    .setAge(30)
    .addFriend("Jane")
    .addFriend("Mark")
    .build();
console.log(john)