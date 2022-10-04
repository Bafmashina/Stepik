// Функции
// function printText(name, age) {
//     return "Hello my name is "+name+", Age: "+age
// }
// let name = "Pavel"
// let age = 30

// let res = printText(name, age)
// console.log(res)
// ========================================================
// let obj = {
//     name: "Ivan",
//     age: 18,
//     hello() {
//         console.log("Меня зовут "+this.name)
//     }
// }
// obj.hello()
// =========================================================
// Сортировка масива
// let arr = [1, 5, 2, 25,16,14,49,3,1,7]
// arr.sort(function(a,b) {
//     if(a==b) return 0
//     if(a>b) return 1
//     if(a<b) return -1
// }) 
// console.log(arr)
// ===========================================================
// Функция чисел Фибоначи
// function fibonachi(count) {
//     let fib = [];
//     for(let i=0; i<count; i++) {
//         if(i==0) fib[i] = 1;
//         else if(i==1) fib[i] = 2;
//         else fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib;
// }
// let f = fibonachi(10);
// console.log(f)
// ==========================================================
// Вычесляем фактариал числа
// function factorial(n) {
//     let fact = 1;
//     if(n==0) return fact;
//     for(let i=1; i<=n; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// let a = factorial(0)
// console.log(a)
// let b = factorial(3)
// console.log(b)
// let c = factorial(5)
// console.log(c)
// ==========================================================
// function addAndMul(num) {
//     num +="";
//     let add = 0, mul = 1;
//     for(let i =0; i<num.length; i++) {
//         add += +num[i];
//         mul *= num[i];
//     }
//     return {
//         "Сумма": add,
//         "Произведение": mul
//     }
// }
// console.log(addAndMul(795))
// ======================================================
// Переворачиваем число
// function revers(number) {
//     number += "";
//     let reversNumber = "";
//     for(let i = number.length-1; i>=0; i--) {
//         reversNumber += number[i]
//     }
//     return +reversNumber
// }
// console.log(revers(3486));
// =========================================================
// Подсчет четных и нечетных цифр
// function number(number) {
//     number += "";
//     let chet = 0, nechet = 0;
//     for(let i =0; i<number.length; i++) {
//         if(number[i] % 2 == 0) chet++;
//         else nechet++;
//     }
//     return {
//         "Четные цифр": chet,
//         "Нечетные цифр": nechet,
//     }
// }
// console.log(number(3486));
// ======================================================
// Угадываем случайное число от 0 до 100
function randomNumber () {
    let number = Math.floor(Math.random()*100)
    for(let count =1; count<=10; count++) {
        let result = prompt(`Попытка №${count}, Введите число:`)
        if(result == number) {
            return alert(`Вы угадали число! Попыток: ${count}, Число: ${number}`)
        } else if(result < number) {
            alert(`Ваше число ${result}, меньше загаданного!`)
        } else if(result > number) {
            alert(`Ваше число ${result}, больше загаданного!`)
        } 
        
    }
    return alert(`Вы не угадали число! Число: ${number}`)
}
randomNumber()