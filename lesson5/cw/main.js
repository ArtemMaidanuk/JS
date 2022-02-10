// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let min=(num1, num2, num3)=>{
//     if (num1<num2 && num1<num3) {
//         return num1;
//     } else if (num2<num1 && num2<num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }
// console.log(min(5,6,3))

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let max = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }
// console.log(max(3,4,6))

// створити функцію яка повертає найбільше число з масиву

// let mass1 = [1,2,3,5,7,5]
// let arrReturn=(arr)=> {
//     let max = arr[0];
//     for (const max1 of arr) {
//        if (max<max1) {
//            max=max1;
//        }
//     }
//     return max
// }
// console.log(arrReturn(mass1))


// створити функцію яка повертає найменьше число з масиву

// let mass2 = [1,23,5,7,5]
//
// let arrReturn=(arr) =>{
//     let min = arr[0];
//     for (const max1 of arr) {
//         if (min>max1) {
//             min=max1;
//         }
//     }
//     return min
// }
// console.log(arrReturn(mass2))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mas = [1,2,3,4,5];
// let calculator=(arr) =>{
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         const mass = arr[i];
//         sum=sum+mass;
//     }
//     return sum
// }
// console.log(calculator(mas))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [1,2,3,4,5];
// function calculator(arr) {
//     let sum=0;
//     let ser;
//     for (let i = 0; i < arr.length; i++) {
//         const mass = arr[i];
//         sum=sum+mass;
//     }
//     ser = sum /arr.length;
//     return ser
// }
// console.log(calculator(mas))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);

// let maxMin= (...mas)=>{
//     let max=mas[0];
//     let min=mas[0];
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
// console.log ('Найменше - ',maxMin(1,2,3,5,6,7,8,9))

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arrCreate =(kilknums)=>{
//     let mas=[];
//     for (let i = 0; i < kilknums; i++) {
//        mas[i]=Math.round(Math.random()*100)
//     }
//     console.log(mas)
// }
// arrCreate(10)


// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

// let arrCreate =(kilknums, limitnums)=>{
//     let mas=[];
//     for (let i = 0; i < kilknums; i++) {
//        mas[i]=Math.round(Math.random()*limitnums)
//     }
//     console.log(mas)
// }
// arrCreate(8,6)


// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let mas = [1, 30, 3, 45, 110];
// let arrCreate = (arr) => {
//     let mass = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         mass.push(arr[i])
//     }
//     console.log(mass)
// }
// arrCreate(mas)
