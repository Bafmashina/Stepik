// Задача 1
// Ввод и вывод данных, оператор присваевания
// Найти периетр
// let a = 2
// let p = 4*a
// console.log(p)
// ===========================
// Задача 2
// Ввод и вывод данных, оператор присваевания
// let a = 8
// let s = a**2
// console.log(s)
// ===========================
// Задача 3
// Целые числа
// let l = 250
// let m = l/100
// let result = Math.trunc(m)
// ==============================
// Задача 4
// Логическое выражение
// let a = -5
// if(a > 0) 
// console.log(true)
// else
// console.log(false)
// =================================
// Задача 5
// Логические выражения
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
// Условный оператор
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
// Оператор выбора
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
// let a = 5, b = 12, count = 0
// for(let i=a; i<=b; i++) {
//     console.log(i)
//     count++
// }
// console.log(`Всего чисел :` + count)
// =================================================================
// Задача 13
// Условный оператор
// let positive = 0, negative = 0
// let a = 4

// if(a>=5) {
//     a = a + 1
//     positive++
// } else if(a<=5) {
//     a = a -2
//     negative++
// }
// console.log(`Положительных: ${positive} \n Отрицательны: ${negative} \n ${a}`)
// =========================================================================================
// Задача 14
// Логическое выражение
// let a = 7
// function delenie(a) {
//     if(a%2) {
//         return true
//     } else return false
// }
// console.log(delenie(a))
// ======================================================================
// Задача 15
// Целые числа
// let m = 27894
// function Mass(kg) {
//     return(Math.trunc(kg/1000))
// }
// console.log(Mass(m))
// =====================================================================
// Задача 16
// Ввод и вывод данных, оператори присвоения
// let a = 14, b = 8
// function PandS (a,b) {
//     console.log("S = " + a * b)
//     console.log("P = " + 2 * (a + b))
// }
// PandS(a,b)
// ================================================================
// Задача 17
// Целые числа
// let a = 5000
// function bait (a) {
//     console.log("Килобайты = " + a/1024)
// }
// bait(a)
// =================================================================
// Задача 18 
// Логические выражения
// let a = 24 
// function chetnoe(a) {
//     if(!(a%2)) {
//         return true
//     } else return false
// }
// console.log(chetnoe(a))
// ===================================================================
// Задача 19
// Последовательности
// let a =[11, 3, 6, 22, 54, 65, 11, 22, 12, 8]
// function arraySum(arr) {
//     let result = 0
//     for(let i=0; i<arr.length; i++) {
//         result += arr[i]
//     }
//     return result
// }
// console.log(arraySum(a))
// ====================================================================
// Задача 20
// Процедуры и функции
// let numbers = [0, 1, 2, 3, 4]
// function PowerA3(a) {
//     return a ** 3
// } 
// for(let i=0; i<numbers.length; i++) {
//     console.log(PowerA3(numbers[i]))
// }
// ===========================================================
// Задаяа 21 
// Процедуры и функции
// let radius = [3, 4, 8, 5]
// function CircleS(r) {
//     // Math.floor() = округляет в меньшую сторону
//     // Math.PI = "pi" или = 3.14
//     return Math.floor(Math.PI * r ** 2)
// }
// for(let i=0; i<radius.length; i++) {
//     console.log(`Circle №${i + 1} S= ` + CircleS(radius[i]))
// }
// ================================================================
// Задача 22 
// Ввод и вывод данных, оператор присваевания
// let d = 8
// function length (d) {
//     console.log(`Длина окружнасти = ` + Math.PI * d)
// }
// length(d)
// =================================================================
// Задача 23
// Ввод и вывод данных, оператор присваевания
// let a = 7
// function cube (a) {
//     console.log(`V = ` + a**3)
//     console.log(`S = ` + 6 * (a**2))
// }
// cube(a)
// ================================================================
// Задача 24
// Целые числа
// let a = 18, b = 4
// let Dlina = Math.floor(a/b)
// console.log(Dlina)
// ===============================================================
// Задача 25
// Логические выражения
// let a = 18, b = -5
// function isBetween(a,b) {
//     if(a>=0 && b < -2) {
//         return true
//     } else
//     return false
// }
// console.log(isBetween(a,b))
// ================================================================
// Задача 26
// Ввод и вывод данных, оператор присваевания
// let a = 8, b = 3, c = 6
// function Dlina (a, b, c) {
//     console.log(`V = ` + `${a * b * c}`)
//     console.log(`S = ` + `${2 * ((a * b) + (b * c)+ (a * c))}`)
// }
// Dlina(a, b, c)
// ====================================================================
// Задача 27
// Целые числа
// let a = 49, b = 5
// let remains = a % b
// console.log(remains)
// ===============================================================
// Задача 28
// Логические выражения
// let a = 1, b = 2, c = 3
// function neravenstvo(a, b, c) {
//     if(a < b && b < c) {
//         return true
//     } else 
//     return false
// }
// console.log(neravenstvo(a, b, c))
// ====================================================================
// Задача 29
// Условный оператор
// let posetive = 0, negative = 0, nulevoe = 0
// let a = 0
// if(a > 0) {
//     a = a + 1
//     posetive++
//     console.log(`Положительное : ${a}`)
// } else if(a < 0) {
//     a = a - 2
//     negative++
//     console.log(`Отрицательное : ${a}`)
// } else if (a === 0) {
//     a = 10
//     nulevoe++
//     console.log(`Нулевое : ${a}`)
// }
// ================================================================
// Задача 30
// Условный оператор
// let a = 8, b = 2, c = -1
// let count = 0
// function isPosetive(num) {
//     if(num > 0) {
//         count++
//     }
// }
// isPosetive(a)
// isPosetive(b)
// isPosetive(c)
// console.log(count)
// =================================================================
// Задача 31
// Условный оператор
// let a = 8, b =3 
// if(a < b) {
//     console.log(b)
// } else {
//     console.log(a)
// }
// ================================================================
// Задача 32
// Условный оператор
// let a = 9, b = 5
// if(b < a) {
//     console.log(b)
// } else console.log(a)
// ================================================================
// Задача 33
// Оператор выбора - (switch)
// let month = 8 
// switch (month) {
//     case 1:
//     case 2:
//     case 12:
//         console.log(`Зима - Winter`)
//         break;
//     case 3:    
//     case 4:    
//     case 5:
//         console.log(`Весна - Spring`)
//         break; 
//     case 6:       
//     case 7:       
//     case 8: 
//         console.log(`Лето - Summer`)
//         break;
//     case 9:    
//     case 10:    
//     case 11:
//         console.log(`Осень - Autumn`) 
//         break;   
// }
// ==========================================================================
// Задвча 34
// Оператор выбора - (switch)
// let M = 5
// let type = 2
// switch (M) {
//     case 1:
//         console.log(M);
//         break;
//     case 2:
//         console.log(M/1000000);
//         break;
//     case 3:
//         console.log(M/1000);
//         break;
//     case 4:
//         console.log(M*1000);  
//         break;
//     case 5:
//         console.log(M*100); 
//         break;
//     default:
//         console.log(`err`)
//         break;                 
// }
// ==========================================================================
// Задача 35
// Цикл с параметром
// let coast = 250
// for(let i=1; i<=10; i++) {
//     console.log(coast * i)
// }
// =========================================================================
// Задача 36
// Цикл с параметром
// let coast = 250
// for(let i=0.1; i<=1; i = i + 0.1) {
//     console.log(Math.round(coast * i))
// }
// ==========================================================================
// Задача 37
// Цикл с параметром
// let coast = 300
// for(let i=1.2; i<=2; i = i + 0.2) {
//     console.log(`i: `+ i)
//     console.log(`coast: `+ Math.random(coast * i))
//     console.log(`-----------------------------`)
// }
// ============================================================================
// Задача 38
// Цикл с условием
// let a = 9
// function stepen3 (a) {
//     let i = 1
//     while(i < a) {
//         if(Math.pow(3, i) == a) {
//             return true
//         }
//         i++
//     }
//     return false
// }
// console.log(stepen3(a))
// ================================================================================
// Задача 39 
// Процедуры и функции
// let a = 2
// function PowerA234 (a) {
//     let b = Math.pow(a, 2)
//     let c = Math.pow(a, 3)
//     let d = Math.pow(a, 4)
//     return [b, c, d]
// }
// console.log(PowerA234(a))
// ===============================================================================
// Задача 40 
// Процедуры и функции
// let a = 3, b = 8, c = 14
// function sumFromAtoB(a, b) {
//     let sum = 0
//     for(let i=a; i<=b; i++) {
//         sum = sum + i
//     }
//     return sum
// }

// function SumRange(a, b, c) {
//     if(c) {
//         if(a>b || b>c) {
//             return 0
//         }
//         let sumAB = sumFromAtoB(a, b)
//         let sumBC = sumFromAtoB(b, c)
//         return[sumAB, sumBC]
//     }
//     if(a>b) {
//         return 0
//     }
//     return sumFromAtoB(a, b)
// }
// console.log(SumRange(a, b, c))
// ===========================================================================
// Задача 41
// Процедуры и функции
// let arr = [3, 5, 8, 4, 6, 8, 9, 2, 1, 7]
// let evenCounter = 0
// function Even(k) {
//     return (k%2)? false : true
// }

// for(let i=0; i<arr.length; i++) {
//     if(Even(arr[i])) evenCounter++
// }
// console.log(evenCounter)
// ===========================================================================
// Задача 42
// Ввод и вывод данных, оператор присваивания
// let a = 10, b = 4 
// function Reshenie (a, b) {
//     console.log("Среднее арефметическое = " + (a + b)/2)
// }
// Reshenie(a, b)
// =====================================================================
// Задача 43
// Ввод и вывод двнных, оператор присваевания
// let a = 8, b = 5
// function SredneeArefmetich (a, b) {
//     // Math.sqrt() = возврощает квадратный корень числа
//     console.log("Среднее арефметическое = " + Math.sqrt(a * b))
// }
// SredneeArefmetich(a, b)
// =======================================================================
// Задача 44
// Ввод и вывод данных, оператор присваевания
// let a = 5, b = 9
// console.log(`Сумма: `+ (a + b))
// console.log(`Разность: `+ (a - b))
// console.log(`Произведение: `+ (a * b))
// console.log(`Частное квадратов: `+ ((a**2)/(b**2)))
// ===================================================================
// Задача 45
// Ввод и вывод данных, орерптор присваевания
// let a = 9, b = 3, c = 5
// console.log(`AC: ` + Math.sqrt((b - a)**2))
// console.log(`BC: ` + Math.sqrt((c - b)**2))
// ====================================================================
// Задача 46
// Целые числа
// toString() = преобразовывает элемент в строковоезначение "string"
// split() = разделяет объект "string" на масив строк
// let a = 23
// let splited = a.toString().split(``)
// console.log(Number(splited[0]) + Number(splited[1]))
// console.log(Number(splited[0]) * Number(splited[1]))
// =====================================================================
// Задача 47
// Целые числа
// reverse() = меняет первый и последний элемен масива местами
// join() = объеденяет все элементы массива в строку "string"
// let a = 48
// let splited = a.toString().split(``)
// console.log(a.toString().split(``).reverse().join(``))
// =================================================================
// Задача 48
// Целые числа
// let a = 548
// console.log(Math.floor(a/100))
// ==============================================================
// Задача 49 
// Логические выражения
// let a = 8, b = 4, c = 2
// if((a>b && b>c) || (a>c && b>c)) {
//     console.log(true)
// } else console.log(false)
// ================================================================
// Задача 50
// Условный оператор
// let a = 9, b = 4
// if(a>b) {
//     console.log(a, b)
// } else  {
//     console.log(b, a)
// }
// ===========================================================
// Задача 51
// Цикл с параметром
// let a = 12, b = 34
// let count = 0
// for(let i=b-1; i>a; i--) {
//     console.log(i)
//     count++
// }
// console.log(`count: ` + count)
// =============================================================
// Задача 52
// Процедуры и функции
// let x = 8, y = 1
// function Quarter(x,y) {
//     if(x<0 && y<0) {
//         return 1
//     }
//     if(x>0 && y>0) {
//         return 2
//     }
//     if(x>0 && y<0) {
//         return 3
//     }
//     if(x<0 && y>0) {
//         return 4
//     }
// }
// console.log(Quarter(x,y))
// =================================================================
// Задача 53 
// Условный оператор
// let a = 8, b = 4
// let low = 0
// if(a>b) {
//     low = b
//     b = a
//     a = low
//     console.log(a + ` ` + b)
// } else {
//     low = a
//     a = b 
//     b = low
//     console.log(a + ` ` + b)
// }
// ==============================================================
// Задача 54
// Цикл с параматером
// let a = 4, b = 8
// let count = 0
// for(let i=a; i<=b; i++) {
//     count += i
//     console.log(i)
// }
// console.log(`count = ` + count)
// ========================================================
// Задача 55
// Процедуры и функции
// let k = [9, 5, 6, 3, 2, 1, 8, 9, 4, 5]
// function isSquare(k) {
//     let i = k
//     while(i < k) {
//         if(Math.pow(2, i) === k) {
//             return {number: k, isSquare: true}
//         }
//         i++
//     }
//     return {number: k, isSquare: false}
// }
// for(let i=0; i<k.length; i++) {
//     console.log(isSquare(k[i]))
// }
// =========================================================
// Задача 56
// Условный оператор
let a = 8, b = 7
if(a !== b) {
    let sum = a + b
    a = sum
    b = sum
} else {
    a = 0
    b = 0
}
console.log(a,b)
   

