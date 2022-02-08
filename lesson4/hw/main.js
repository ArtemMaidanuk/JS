// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a,b){
//
//     return a*b ;
// }
// square(2,3);
// console.log( 'Площа — ', square(2,6));

// створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareCircle(r) {
//     const PI = 3.14;
//     return PI*(r**2);
// }
// console.log ('Площа — ',squareCircle(6));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function square(h,r) {
//     const PI = 3.14;
//     return 2*PI*r*h;
// }
// console.log('Площа — ',square(2,2))

// створити функцію яка приймає масив та виводить кожен його елемент

// let mas = [3,4,5,6,7,8,9];
// function arrCreate(arr) {
//     for (const mass of arr) {
//        console.log(mass)
//     }
// }
// arrCreate(mas)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pCreate (p) {
//     document.write(`<p>${p}</p>`);
// }
// pCreate('Okten-Web')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function liCreate (txt) {
//     document.write('<ul>')
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write('</ul>')
// }
// liCreate('item')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liCreate (txt, kilk) {
//     for (let i = 0; i < kilk; i++) {
//         document.write('<ul>')
//         document.write(`<li>${txt}</li>`)
//         document.write('</ul>')
//     }
// }
// liCreate('item',10)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mas = [3,4,'okten',true,false,'okten'];
// function arrCreate(arr) {
//     for (const mass of arr) {
//         document.write('<ul>')
//         document.write(`<li>${mass}</li>`)
//         document.write('</ul>')
//     }
// }
// arrCreate(mas)
//

// function arrCreate(arr) {
//     for (const mass of arr) {
//         document.write('<ul>')
//         document.write(`<li>${mass}</li>`)
//         document.write('</ul>')
//     }
// }
// arrCreate([2,true,'Okten'])


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. '
// 'Для кожного об'єкту окремий блок.

// let mas = [
//     {id:1,name:'Artem',age:20},
//     {id:2,name:'Max',age:20},
//     {id:3,name:'Diana',age:19}
// ]
// function arrCreate (arr) {
//     for (const mass of arr) {
//      document.write(`<div>${mass.id} ${mass.name} ${mass.age}</div>`)
//     }
// }
// arrCreate(mas)