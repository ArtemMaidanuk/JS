// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = prompt('Введіть перше число')
// let b = prompt('Введіть друге число')
//
// if (a>b){
//     console.log('Більше число - ',a)
// } else if (a<b){
//     console.log('Більше число - ',b)
// } else {
//     console.log('Вони однакові')
// }

// У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let a = +prompt('Введіть ноиер квартири');
// if (a>=1 && a <=20) {
//     console.log ('Ця квартира знаходиться в 1 під`їзді')
// } else if (a>=21 && a <=48) {
//     console.log ('Ця квартира знаходиться в 2 під`їзді')
// } else if (a>=49 && a<=90) {
//     console.log ('Ця квартира знаходиться в 3 під`їзді')
// } else {
//     console.log ('Ви помилилися будинком, Ви знаходитись не на цій вулиці!!!!')
// }

// Ми маємо змінну number в яку користувач задає числове значення,
//     якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('Введіть змінну');
// (number === 10) ? console.log('ВІРНО') : console.log('НЕВІРНО')

// Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = Array;
// if (typeof x === "string") {
//     console.log(2)
// } else if (typeof x === "number") {
//     console.log(1)
// } else if (typeof x === "boolean") {
//     console.log(3)
// } else {
//     console.log(33)
// }

// Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let a = prompt('Введіть температуру на вулиці');
// if (a>=10 && a<=22) {
//     console.log('ми йдемо ВЧИТИСЯ')
// } else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН')
// }

// (a>=10 && a<=22) ? console.log('ми йдемо ВЧИТИСЯ') : console.log('сидимо вдома і вчимося ОНЛАЙН')

// За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д )
//     і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let game = +prompt('Введіть число від 1 до 5');
// switch (game) {
//     case 1 :
//         console.log('Ви виграли похід у музей');
//         break;
//     case 2 :
//         console.log('Ви виграли Audy RS7');
//         break;
//     case 3 :
//         console.log('Ви виграли пральну машину');
//         break;
//     case 4 :
//         console.log('Ви виграли смарт-годинник');
//         break;
//     case 5 :
//         console.log('Ви виграли квартиру в центі столиці');
//         break;
//     default:
//         console.log('Нажаль, Ви нічого невиграли. Грайте ще, і вам обов`язкому пощастить!!!');
// }