
// let str='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';

// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(str.length)
// console.log(str2.length)
// console.log(str3.length)

// Перевести до великого регістру наступні стрінгові значення

// console.log(str.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())

// Перевести до нижнього регістру настипні стрінгові значення

// console.log(str.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// str.trim();
// console.log(str.trim()) ;

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Каждый охотник желает знать';
// let stringToArray = arr=>{
//     let split = str.split(" ");
//     return split
// }
//
// console.log(stringToArray(str))
// document.write(stringToArray(str))

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let txt = 'Каждый охотник желает знать';
// let delete_characters=(str, length)=>{
//     let slice = str.substr(0, length);
//     return slice;
// }
//
// console.log(delete_characters(txt,7))
// document.write(delete_characters(txt,7))

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let arr = "HTML JavaScript PHP";
// let insert_dash=str=> {
//     let split = str.split(' ').join('—').toUpperCase()
//
//     return split
// }
// document.writeln(insert_dash(arr));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

//     let firstElementUpperCase = str=> {
//    let arr= str[0].toUpperCase()+str.slice(1)
//         return arr
// }
//
// console.log(firstElementUpperCase('arrbgjjmnrtem'))

// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'Каждый охотник желает знать'
// let capitalize=(str)=>{
//     return str.split(' ').map(txt=>txt.charAt(0).toUpperCase()+txt.slice(1)).join(' ');
// }
//
// console.log(capitalize(str))



