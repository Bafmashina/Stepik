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
// let positive = 0; negative = 0
// let a = 5, b = -6, c = -1

// if(a > 0) {
//     positive++
// } else if(a < 0) {
//     negative++
// }
// if(b > 0) {
//     positive++
// } else if(b < 0) {
//     negative++
// }
// if(c > 0) {
//     positive++
// } else if(c < 0) {
//     negative++
// }
// console.log(`Положительных: ${positive} \n Отрицательных: ${negative}`)
// ============================================================================
// Задача 8
// let day =  1
// switch(day) {
//     case 1 :
//         alert(`Понедельник`);
//         break
//     case 2 :
//         alert(`Вторник`);
//         break
//     case 3 :
//         alert(`Среда`);
//         break
//     case 4 :
//         alert(`Четверг`);
//         break
//     case 5 :
//         alert(`Пятница`);
//         break
//     case 6 :
//         alert(`Суббота`);
//         break
//     case 7 :
//         alert(`Воскресенье`);
//         break
//         default:
//             alert(`Неизвестно`)
// }
// =============================================================
// Задача 9
// Цикл с параметром
// let k = 4, n = 8
// for(let i =0; i<n; i++) {
//     console.log(k)
// }
// ===========================================================
// Задача 10
// Цикл с условием
// let a = 11, b = 3
// let i = 0
// while(i <= a-b) {
//     i += b
// }
// console.log(`Длтна отрезка незанятой части A: ${a - i}`)
// ===============================================================
// Задача 11
// Оператор выбора
// let k = 3
// switch(k) {
//     case 1:
//         console.log("Плохо")
//         break
//     case 2:
//         console.log("Неудовлетварительно")
//         break
//     case 3:
//         console.log("Удовлетварительно")
//         break
//     case 4:
//         console.log("Хорошо")
//         break
//     case 5:
//         console.log("Отлично")
//         break
//     default:
//         console.log("Ошибка")
//         break
// }
// =================================================================
// Задача 12
// Цикл с параметром
let a = 5, b = 12, count = 0
for(let i=a; i<=b; i++) {
    console.log(i)
    count++
}
console.log(`Всего чисел :` + count)