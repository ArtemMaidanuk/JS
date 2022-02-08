// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function collation(a,b,c){
//     if (a<b && a<c) {
//         return a;
//     } else if (b<a && b<c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// let num = collation(2, 1, 5 )
// console.log(num)

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function collation(a,b,c){
//     if (a>b && a>c) {
//         return a;
//     } else if (b>a && b>c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// let num = collation(2, 1, 5 )
// console.log(num)

// створити функцію яка повертає найбільше число з масиву

// let mass = [1, 3, 54, 6, 7]
//
// function arrReturn(arr) {
//     let max = arr[0];
//     for (const max1 of arr) {
//        if (max<max1) {
//            max=max1;
//        }
//     }
//     return max
// }
//
// arrReturn(mass)
// console.log(arrReturn(mass))


// створити функцію яка повертає найменьше число з масиву

// let mass = [1, 0, 54, 6, 7]
//
// function arrReturn(arr) {
//     let max = arr[0];
//     for (const max1 of arr) {
//         if (max>max1) {
//             max=max1;
//         }
//     }
//     return max
// }
//
// arrReturn(mass)
// console.log(arrReturn(mass))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mas = [1,31,23,45,11];
// function calc(arr) {
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         const mass = arr[i];
//         sum=sum+mass;
//     }
//     return sum
// }
// calc(mas)
// console.log(calc(mas))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [1,31,23,45,11];
// function calc(arr) {
//     let sum=0;
//     let ser;
//     for (let i = 0; i < arr.length; i++) {
//         const mass = arr[i];
//         sum=sum+mass;
//         ser = sum /arr.length;
//     }
//     return ser
// }
// calc(mas)
// console.log(calc(mas))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);

// function createMaxMin (...mas){
//     let max=arguments[0];
//     let min=arguments[0];
//     for (let num of mas) {
//         if (num>max){
//             max=num;
//         }
//         if (num<min){
//             min=num;
//         }
//     }
//     console.log( 'Найбільше - ',max);
//     return min;
// }
// console.log ('Найменше - ',createMaxMin(1,2,3,56,9))

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function arrCreate (kilk){
//     let mas=[];
//     for (let i = 0; i < kilk; i++) {
//        mas[i]=Math.round(Math.random()*100)
//     }
//     console.log(mas)
// }
// arrCreate(12)
//

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

// function arrCreate (kilk, limit){
//     let mas=[];
//     for (let i = 0; i < kilk; i++) {
//        mas[i]=Math.round(Math.random()*limit)
//     }
//     console.log(mas)
// }
// arrCreate(12,10)


// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let mas = [111,31,23,45,111];
// function arrCreate (arr){
// let mass=[];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         mass.push(arr[i])
//     }
//     console.log (mass)
// }
// arrCreate(mas)
