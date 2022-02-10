// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let square = (num1, num2) => num1 * num2;
//
// console.log('Площа прямокутника — ',square(2, 4));

// створити функцію яка обчислює та повертає площу кола з радіусом r

// let squareCircle= (radius) => {
//     const PI = 3.14;
//     return PI*(radius**2);
// }
// console.log ('Площа кола — ',squareCircle(2));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function square(height, radius) {
//     const PI = 3.14;
//     return 2*PI*radius*height;
// }
// console.log('Площа циліндра — ',square(4, 1))

// створити функцію яка приймає масив та виводить кожен його елемент

// let mas1 = [1,2,3,4,5,6];
// let arrCreate=(arr) =>{
//     for (const mass of arr) {
//        console.log(mass)
//     }
// }
// arrCreate(mas1)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let pCreate = (p) => document.write(`<p>${p}</p>`);
//
// pCreate('Okten - the best school!!!')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//  let liCreate= (someTxt)=> {
//     document.write('<ul>')
//     document.write(`<li>${someTxt}</li>`)
//     document.write(`<li>${someTxt}</li>`)
//     document.write(`<li>${someTxt}</li>`)
//     document.write('</ul>')
// }
// liCreate('Okten')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let liCreate= (someTxt, kilk)=>{
//     document.write('<ul>')
//     for (let i = 0; i < kilk; i++) {
//         document.write(`<li>${someTxt}</li>`)
//     }
//     document.write('</ul>')
// }
// liCreate('Okten-Web', 10)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mas = [3,4,'okten',10,false,'web'];
// let arrCreate=(arr) =>{
//     document.write('<ul>')
//     for (const mass of arr) {
//         document.write(`<li>${mass}</li>`)
//     }
//     document.write('</ul>')
// }
// arrCreate(mas)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. '
// 'Для кожного об'єкту окремий блок.

// let mas = [
//     {id:1,name:'Artem',age:20},
//     {id:2,name:'Max',age:20},
//     {id:3,name:'Diana',age:19}
// ]
// let arrCreate= (arr)=> {
//     for (const mass of arr) {
//      document.write(`<div>${mass.id}, ${mass.name}, ${mass.age}</div>`)
//     }
// }
// arrCreate(mas)