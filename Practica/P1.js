// Решение задач в JS
// Задача 1
// let arr = []
// for(let i = 0; i < 20; i+=2) {
//     arr.push(i)
// }
// console.log(arr)
// ========================
// Задача 2
// let arr = []
// for(let i=30; i>0; i-=3) {
//     arr.push(i)
// }
// console.log(arr)
// =============================
// Задача 3
// let arr = []
// for(let i =0; i < 10; i++) {
//     arr.push(Math.pow(i,2))
// }
// console.log(arr)
// ===========================
// Задача 4
let arr =[7, 4, 6, 1, 0, 2, 8, 10, 15, 23, 14]
let count = 0;
for(i = 0; i < arr.length; i++) {
    if(arr[i]%2==0){
        count++;
    }
}
console.log("Всешо четных элементов: " + count)