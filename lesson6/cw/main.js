// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron Whisley';
// let n3 = 'Hermione Granger';
//
// let normaliz = txt => {
//     let name = txt
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
// console.log(name)
// }
// normaliz(n1)
// normaliz(n2)
// normaliz(n3)

// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let mathRandom = (kilk) => {
//     let arr = []
//     for (let i = 0; i < kilk; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr
// }
// let rez = mathRandom(15);
// console.log(rez);

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort


// rez.sort((a, b) => a - b)
// console.log(rez);


// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let mathRandom = (kilk) => {
//     let arr = []
//     for (let i = 0; i < kilk; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     console.log(arr)
//     return arr.filter(num=>num%2===0)
// }
// let rez = mathRandom(15);
// console.log(rez);
//

// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let mathRandom = (kilk) => {
//     let arr = []
//     for (let i = 0; i < kilk; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     console.log(arr)
//     return arr.map(txt=>txt.toString())
// }
// let rez=mathRandom(15)
// console.log(rez)

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let num=[1,3,4,7,3,8,45,23,78]
// let sortNums=(arr,direction)=>{
//     if (direction ==="ascen") {
//         return arr.sort((a,b) => a-b)
//     }
//     if (direction ==="desce") {
//         return arr.sort((a,b) => b-a)
//     }
// }
// let rez=sortNums(num,'ascen')
// console.log(rez)
// let rez2=sortNums(num,'desce')
// console.log(rez2)

// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let sortArr = coursesAndDurationArray.sort((a,b)=>
// b.monthDuration-a.monthDuration)
// console.log(sortArr)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sortArr2 = coursesAndDurationArray.filter((curses)=>{return curses.monthDuration>5})
//
// console.log(sortArr2)