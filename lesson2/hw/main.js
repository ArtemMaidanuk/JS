// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Введфть час від 0 до 59')
// if (time >= 0 && time <=15)  {
//     console.log ('Час припадає в 1 чверть')
// } else if (time > 15 && time <=30)  {
//     console.log ('Час припадає в 2 чверть')
// } else if (time > 30 && time <=45)  {
//     console.log ('Час припадає в 3 чверть')
// } else if (time > 45 && time <=59)  {
//     console.log ('Час припадає в 4 чверть')
// } else {
//     console.log ('Введені некоректні дані')
// }

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = prompt('Введфть число від 1 до 31')
// if (day >= 1 && day <=10)  {
//     console.log ('Число припадає в 1 декаду')
// } else if (day > 10 && day <=20)  {
//     console.log ('Число припадає в 2 декаду')
// } else if (day > 20 && day <=31)  {
//     console.log ('Число припадає в 3 декаду')
// } else {
//     console.log ('Введені некоректні дані')
// }

// У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm('???')
// if (test) {
//     console.log('Вірно')
// } else {
//     console.log('Неправильно')
// }

//            Запис(тернаркою)

// let test = confirm('???') ? console.log('Вірно') :  console.log('Неправильно')


// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt(" Введфть зміну а ")
// if (a !== 0 ) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = +prompt("Введіть порядковий номер")
// switch (day) {
//     case '1':
//         console.log('Понеділок - пари в універі, лекція в okten');
//         break;
//     case '2':
//         console.log('Вівторок - пари в універі, виконання дз і лк в okten');
//         break;
//     case '3':
//         console.log('Середа - пари в універі, лекція в okten');
//         break;
//     case '4':
//         console.log('Четвер - пари в універі, виконання дз і лк в okten');
//         break;
//     case '5':
//         console.log('Пятниця - пари в універі, лекція в okten');
//         break;
//     case '6':
//         console.log('Субота - лекція в okten із англійської виконання дз і лк');
//         break;
//     case '7':
//         console.log('Неділя - виконання дз і лк в okten, трохи відпочинку  ');
//         break;
//     default:
//         console.log('Невірний день тижня')
// }

// Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Введіть рік')
// let yearVus = year%4;
// if (yearVus === 0) {
//     console.log('Високосний рік урааааа!!!!!!')
// }else {
//  console.log('Не високосний рік ') }

// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let js = prompt('Яка «офіційна» назва JavaScript?')
// if (js === 'ECMAScript') {
//     console.log('Правильно!')
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }


