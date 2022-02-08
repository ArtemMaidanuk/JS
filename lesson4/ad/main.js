// створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

// function arg(){
//    if(arguments.length === 1){
//        console.log(arguments[0])
//    } else {
//        if (arguments.length === 2) {
//            ret= arguments[0]+arguments[1]
//        }
//        console.log(ret)
//    }
// }
//
// arg(123,450)

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function sumArrayCreate (arr,mas)  {
//     let mass = [];
//     for (let i = 0; i < arr.length; i++) {
//         mass.push(arr[i] + mas[i]);
//     }
//     return mass;
// }
//
// console.log(sumArrayCreate([1,2,3,4],[1,2,3,4]));

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let product = [
    {
        name: "milk",
        price:20,

    },
    {
        marka: "beer",
        kilk:20,
        tara:20,
    }
]


// function arrCreate(arr){
//   let mass=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i]==='object'){
//             keys = (Object.keys(arr[i]))
//         }
//         for (let j = 0; j < keys.length; j++) {
//             mass.push(keys[j])
//
//         }
//     }
// return mass
// }
//
// console.log(arrCreate(product))

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function arrCreate(arr){
//     let mass=[];
//     let ms=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i]==='object'){
//             keys=(Object.values(arr[i]))
//     }
//         for (let j = 0; j < keys.length; j++) {
//             mass.push(keys[j])
//
//         }
//     }
//     return mass
// }
//
// console.log(arrCreate(product))
