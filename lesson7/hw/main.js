// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
//
// let arrUser = [
//     new User(1,'Artem','Maidanuk','maidanukartem@gmail.com','0932835891'),
//     new User(5,'Max','Palamar','palamarmax@gmail.com','0983456921'),
//     new User(3,'Anna','Kovalchuk','annakov@gmail.com','0634572673'),
//     new User(10,'Katia','Lastovliak','katial@gmail.com','0984561278'),
//     new User(5,'Diana','Paseka','pasekadiana@gmail.com','0500500501'),
//     new User(30,'Artem','Maidanuk','maidanukartem@gmail.com','0932835891'),
//     new User(7,'Max','Palamar','palamarmax@gmail.com','0983456921'),
//     new User(40,'Anna','Kovalchuk','annakov@gmail.com','0634572673'),
//     new User(9,'Katia','Lastovliak','katial@gmail.com','0984561278'),
//     new User(100,'Diana','Paseka','pasekadiana@gmail.com','0500500501'),
//
// ]
//
// console.log(arrUser)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter= arrUser.filter((index)=>{
//     if (index.id%2===0){
//         return index
//     }
// })
// console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

// let sort= arrUser.sort((a,b)=>{
//         return a.id-b.id
// })
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// let person = [
//     new Client(1, 'Artem', 'Maidanuk', 'maidanukartem@gmail.com', '0932835891', ['beer', 'meat', 'toy']),
//     new Client(5, 'Max', 'Palamar', 'palamarmax@gmail.com', '0983456921', ['bread',]),
//     new Client(3, 'Anna', 'Kovalchuk', 'annakov@gmail.com', '0634572673', ['milk', 'meat']),
//     new Client(10, 'Katia', 'Lastovliak', 'katial@gmail.com', '0984561278', ['beer',]),
//     new Client(5, 'Diana', 'Paseka', 'pasekadiana@gmail.com', '0500500501', ['bread', 'toy', 'toy', 'milk']),
//     new Client(30, 'Dima', 'Maidanuk', 'maidanukartem@gmail.com', '0932835891', ['beer', 'meat']),
//     new Client(7, 'Vitia', 'Palamar', 'palamarmax@gmail.com', '0983456921', ['milk', 'meat', 'milk', 'meat', 'milk', 'meat']),
//     new Client(40, 'Roma', 'Kovalchuk', 'annakov@gmail.com', '0634572673', ['beer', 'water', 'vodka']),
//     new Client(9, 'Vlad', 'Lastovliak', 'katial@gmail.com', '0984561278', []),
//     new Client(100, 'Dima', 'Paseka', 'pasekadiana@gmail.com', '0500500501', ['milk']),
// ]
//
// console.log(person)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = person.sort((a,b)=>{
//   return a.order.length-b.order.length
// })
//
// console.log(sort)