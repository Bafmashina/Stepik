let admin = {
    rules: 777,
    isAdmin() {
        console.log("Я админ, мои права "+this.rules)
    }
}
function User(name, age) {
    this.name = name;
    this.age = age;
    this.__proto__= admin;
}
let u1 = new User("Petr", 21)
let u2 = new User("Kate", 19)
let u3 = new User("Masha", 20)