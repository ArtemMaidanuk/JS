//     a. заповнити його 50 парними числами за допомоги циклу.

// let arr1 = [];
// let a1 = 4
//
// for (let i = 0; i <50; i++) {
//     if (a1 % 2===0) {
//         arr1[i]=a1
//         a1=a1+2
//     }
// }
// console.log(arr1)

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let arr2 = [];
// let a2 = 5
// for (let i = 0; i <50; i++) {
//     if (a2 % 2!==0) {
//         arr2[i]=a2
//         a2=a2+2
//     }
//
// }
// console.log(arr2)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr3 = [];
// for (let i = 0; i < 20; i++) {
//    arr3[i] = Math.floor(Math.random()*1000);
// }
// console.log(arr3)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// // let arr4 = [];
// // for (let i = 0; i < 20; i++) {
// //    arr4[i] = Math.floor(Math.random()*724)+8;
// //
// // }
// console.log(arr4)

// let mas= arr1.concat(arr2).concat(arr3).concat(arr4);
//
// console.log(mas)

// Вивести за допомогою console.log кожен третій елемен

// for (let i = 0; i < mas.length; i++) {
//     // const ma = mas[i];
//     if (i%3===0) {
//         console.log(mas[i])
//     }
//
// }

// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < mas.length; i++) {
//     // const ma = mas[i];
//     if (i%3===0) {
//         if (mas[i]%2===0){
//             console.log(mas[i])
//         }
//
//     }
//
// }

// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let mass=[]
// for (let i = 0; i < mas.length; i+=3) {
//     // const ma = mas[i];
//         if (mas[i]%2===0){
//             mass=mas[i];
//             console.log(mass)
//         }
// }

// let mass=[]
// for (let i = 0; i < mas.length; i+=3) {
//     // const ma = mas[i];
//     if (mas[i]%2===0){
//         mass.push(mas[i]);
//         console.log(mass)
//     }
// }

// Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// for (let i = 0; i < mas.length; i++) {
//     if (mas[i]%2===0) {
//         console.log(mas[i]-1)
//     }
//
// }

// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100,250,50,168,120,345,188];
// let check= 0;
// let ser;
// for (let i = 0; i < arr.length; i++) {
//     check  = check + arr[i];
//     ser = check / arr.length
//     ser= Math.floor(ser)
// }
// console.log(ser)


// Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let mas = [2,30,50,76,35,60];
// let arr =[]
// for (let i = 0; i < mas.length; i++) {
//     arr[i]=mas[i]*5;
// }
// console.log(mas)
// console.log(arr)


// Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let mas = [1,3,true,false,'Artem','Diana',23,true];
// let arr = [];
// for (let i = 0; i < mas.length; i++) {
//     if (typeof mas[i] === "number") {
//         arr[i]=(mas[i])
//     }
// }
// console.log(arr)

// let mas = [1,3,true,false,'Artem','Diana',23,true];
// let arr = [];
// for (let i = 0; i < mas.length; i++) {
//     if (typeof mas[i] === "number") {
//         arr.push(mas[i])
//     }
// }
// console.log(arr)

// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

// let userCities = [];
// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.live = city;
//             userCities.push(user) ;
//         }
//     }
// }
// console.log(userCities);

// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let mas = [1,4,5,6,8,3,7,2,9,10]
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i]%2===0){
//         console.log(mas[i])
//     }
//
// }

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//     За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let mas = [1,4,5,6,8,3,7,2,9,10];
// let arr = [];
// for (let i = 0; i < mas.length; i++) {
//     arr[i]=mas[i]
// }
// console.log(arr)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i];
// }
// console.log (str)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
// j=0
// while (j < arr.length) {
//     str = str + arr[j];
//     j++;
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
// for (let j of arr) {
//     str = str + j;
// }
//
// console.log(str)