// Способ созданмя даты
// let a = new Date("2015-05-25T10:51:25.941")
// console.log(a);
// ======================================
// Авто исправление даты
// let a = new Date(2016,1,28)
// a.setDate(a.getDate()+2)
// console.log(a);
// =====================================
// Преоброзование даты к числу
// Можно определить сколько по времени выполнялся фрагмент кода
// let a = Date.now(new Date())

// for(let i=0; i<1000; i++) {
//     console.log(0)
// }

// let b = Date.now(new Date())
// console.log(b-a)
// Метод форматирования и вывода даты
let a = new Date(2014,11,31,12,30,0)
let options = {
    era: "long",
    year:"numeric",
    month:"long",
    day:"numeric",
    weekday:"long",
    timezone:"UTC",
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
}
console.log(a.toLocaleString("ru", options));