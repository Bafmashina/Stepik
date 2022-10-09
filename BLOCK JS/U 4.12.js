// const a =3.5
// Расширение
// function sum(a,b) {
//     return(a+b)
// }
// let date = [4,8]
// ===============================
// Деструктивное присваивание
// let [a,b,c,d] = [10,5,8,9]
// ==============================
// Стрелочные функции
// let sum = (a,b,c) => a+b+c
// sum(4,5,3)
// Контекст в стрелочных функциях
// function Person() {
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//         console.log(this.age)
//     },1000);
// }
// var p = new Person();
// ===================================
// Создание двоичных чисел
// let a = 0b0111
// Восьмеричных чисел
// let d = 0o10
// =====================================
// 
// let a ="NaN"
// let b =  NaN
// let c ="hello"
// let d =12;
// console.log(Number.isNaN(a))
// console.log(Number.isNaN(b))
// console.log(Number.isNaN(c))
// console.log(Number.isNaN(d))
// ===================================
// Трегонометрия в Math
// console.log(Math.sinh(0))//гиперболический синус
// console.log(Math.cosh(0))//гиперболический косинус
// console.log(Math.tanh(0))//обратный гиперболический синус
// console.log(Math.asinh(0))//обратный гиперболический косинус
// console.log(Math.acosh(1))//обратный гиперболический тангенс
// console.log(Math.atanh(0))//Теорема Пифагора
// console.log(Math.hypot(2,2,1))//
// ====================================================
// Алгеброическте методы
// console.log(Math.log2(16))//логорифм по основанию 2
// console.log(Math.log10(1000))//логорифм по основанию 10
// console.log(Math.log1p(0))//то же, что и log(1+value)
// console.log(Math.expm1(0))//функция обратная Math.log1p()
// console.log(Math.cbrt(8))//корень кубический
// =================================================
// Методы для работы со строковым типом данных
// console.log("Str".repeat(3))
// let a = "Str".repeat(4)
// поиск одной строки в другой черех includs
let str = "Hello, i`am simple string"
console.log(str.includes("simple", 0))
// поиск сначала
let str1 = "Hello, i`am simple string"
console.log(str1.startsWith("Hello"))
// Проверка, заканчиваеться ли строка на слово Hello
let str2 = "Hello, i`am simple string"
console.log(str2.endsWith("Неllo"))
// ==========================================
// Метод fill=позволяет заполнять значение масива
// let arr = [5,8,9,2,4]
// arr.fill(0,1,2)
// console.log(arr)
// ===============================================
// Методы массива
// let arr1 = [`a`,`b`,`c`]
// let entries = arr1.entries()
// let keys = arr1.keys()
// let values = arr1.values()
// console.log(...entries)
// console.log(...keys)
// console.log(...values)
// ======================================================
// Избавлем массив от дубликатов
let arr = [1,5,4,7,8,9,1,4,5]
let arr1 = [...new Set(arr)]
console.log(arr1)