// Задача 1
// Найти периетр
// let a = 2
// let p = 4*a
// console.log(p)
// ===========================
// Задача 2
// Найти площадь
// let a = 8
// let s = a**2
// console.log(s)
// ===========================
// Задача 3
// let l = 250
// let m = l/100
// let result = Math.trunc(m)
// ==============================
// Задача 4
// let a = -5
// if(a > 0) 
// console.log(true)
// else
// console.log(false)
// =================================
// Задача 5
// Справедливы ли неравенства
// let a = 3, b =3
// if(a>2 && b<=3) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// ====================================
// Задача 6
// Условный оператор
// let a = 6, b = 7
// if (a,b> 0) {
//     a = a + 1
//     b = b + 1
//     console.log(a,b)
// } else {
// console.log(a,b)
// }
// ===========================================
// Задача 7 
// Найти колтчество положительных
let positive = 0; negative = 0
let a = 5, b = -6, c = -1

if(a > 0) {
    positive++
} else if(a < 0) {
    negative++
}
if(b > 0) {
    positive++
} else if(b < 0) {
    negative++
}
if(c > 0) {
    positive++
} else if(c < 0) {
    negative++
}
console.log(`Положительных: ${positive} \n Отрицательных: ${negative}`)