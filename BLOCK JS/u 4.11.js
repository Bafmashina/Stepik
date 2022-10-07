// let admin = {
//     rules: 777,
//     isAdmin() {
//         console.log("Я админ "+this.name+" мои права "+this.rules)
//     }
// }
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.myInfo = function() {
//         console.log("Меня зовут "+this.name+", мне "+this.age+" лет")
//     }
//     this.__proto__= admin;
// }
// let u1 = new User("Petr", 21)
// let u2 = new User("Kate", 19)
// let u3 = new User("Masha", 20)

// ========================================
// Классы
class User {
    constructor(name, age, admin=false) {
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    myInfo() {
        console.log("Меня зовут "+this.name+", мне "+this.age+" лет")
        if(this.admin == true) {
            console.log("\nЯ админ");
        }
    }
}
// extends == унаследование класса у User
class Moderator extends User {
    constructor(name, age, admin=false, moder=true) {
        super(name, age, admin)
        this.moder = moder;
    }
    static addPost() {
        console.log("New Post");
    }
    static master = true;
    myInfo() {
        super.myInfo();
        console.log("\nЯ модератор");
    }
    
}
let u1 = new User("Petr", 21)
let u2 = new User("Kate", 19, true)
let u3 = new User("Masha", 20)
let m1 = new Moderator("Ivan", 22, true)