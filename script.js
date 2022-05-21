"use strict"

//const num = new Number(3); // создали переменную с чилсом 3

//console.log(num);

//const num = new Function (3); // создали новую функцию
//console.log(num);

function User (name, id) { 
    this.name = name;
    this.id = id;
    this.human = true;   // создали функцию с аргументами имя и ид. 
    this.hello = function (){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User("Ivan", 28); // исходя из функции єто теперь обьект(из за new)
const alex = new User ("Alex",20);

ivan.exit();

ivan.hello();
alex.hello();
console.log(ivan);
console.log(alex); // получились обьекті 


