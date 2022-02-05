// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [1,3,4,5,6];
// let str = ['one','two','Artem','Max','We'];
// let arr = [1,'Artem',true,false,'Max'];
// console.log(num);
// console.log(str);
// console.log(arr)

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let a = [];
// a[0] ='om=ne';
// a[1] = 2;
// a[2] = 3000;
// a[3] = 47;
// a[4] = true;
// console.log(a)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Artem</div>`)
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Okten  ${i} Web</div>`)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<20){
//     document.write(`<div> <h1> Okten Web </h1></div>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20){
//     document.write(`<div> <h1> Okten ${i} Web </h1></div>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [10,20,30,40,50,60,70,80,90,100]
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log (arrElement)
//
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['artem','max','anna','oleg','pasha','artem','max','anna','oleg','pasha']
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log (arrElement)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['artem',1,'anna',5,true,false, {},60,'oleg',100]
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log (arrElement)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки булеві елементи

// let arr = ['artem',1,'anna',5,true,false, 10,true,'oleg',100]
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i]
//     if (typeof arrElement === "boolean" ) {
//         console.log(arrElement)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof 
//     вивести тільки числові елементи

// let arr = ['artem',1,'anna',5,true,false, 10,true,'oleg',100]
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i]
//     if (typeof arrElement === "number" ) {
//         console.log(arrElement)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof 
//     вивести тільки рядкові елементи

// let arr = ['artem',1,'anna',5,true,false, 10,true,'oleg',100]
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i]
//     if (typeof arrElement === "string" ) {
//         console.log(arrElement)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

// let a = [];
// a[0] ='om=ne';
// a[1] = 2;
// a[2] = 3000;
// a[3] = 47;
// a[4] = true;
// a[5] = false;
// a[6] = true;
// a[7] = 100;
// a[8] = 'true';
// a[9] = {};
// for (let i = 0; i < a.length; i++) {
//     let aElement = a[i];
//     console.log (aElement)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//    console.log ('поточний номер кроку — '+i)
//     document.write(`<div>поточний номер кроку — ${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//    console.log ('поточний номер кроку — '+i)
//     document.write(`<div>поточний номер кроку — ${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i=i+2) {
//     console.log ('поточний номер кроку — '+i)
//     document.write(`<div>поточний номер кроку — ${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2=== 0)
//     console.log ('поточний номер кроку — '+i)
//     document.write(`<div>поточний номер кроку — ${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2!== 0)
//         console.log ('поточний номер кроку — '+i)
//     document.write(`<div>поточний номер кроку — ${i}</div>`)
//
// }