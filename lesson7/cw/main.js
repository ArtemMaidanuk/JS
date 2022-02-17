// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, power) {
//     this['model'] = model;
//     this['producer'] = producer;
//     this['year'] = year;
//     this['maxSpeed'] = maxSpeed;
//     this['power'] = power;
//     this.drive = function () {
//        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//     this.info = function () {
//             console.log(`модель - ${this.model}`);
//             console.log(`виробник - ${this.producer}`);
//             console.log(`рік випуску - ${this.year}`);
//             console.log(`максимальна швидкість - ${this.maxSpeed}`);
//             console.log(`об'єм двигуна - ${this.power}`);
//     }
//     this.increaseMaxSpeed =function (newSpeed) {
//         this.maxSpeed=this.maxSpeed+newSpeed
//     }
//     this.changeYear =function (newValue) {
//         this.year=newValue
//     }
//     this.addDriver =function  (driver) {
//         this.driver=driver
//     }
// }
//
// let car1 = new Car('RS7', 'Audi', 2012, 304, 4)
// console.log(car1)
// console.log('------------------------------')
// car1.info();
// car1.drive()
// console.log('------------------------------')
// car1.increaseMaxSpeed(20)
// car1.drive()
// console.log('------------------------------')
// car1.changeYear(20014)
// car1.info();
// console.log('------------------------------')
// car1.addDriver({name:'Artem',stage:10,age:20})
//  console.log(car1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, power) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.power = power;
//     }
//     drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//     info = function () {
//         console.log(`модель - ${this.model}`);
//         console.log(`виробник - ${this.producer}`);
//         console.log(`рік випуску - ${this.year}`);
//         console.log(`максимальна швидкість - ${this.maxSpeed}`);
//         console.log(`об'єм двигуна - ${this.power}`);
//     }
//      increaseMaxSpeed =function (newSpeed) {
//         this.maxSpeed=this.maxSpeed+newSpeed
//     }
//     changeYear =function (newValue) {
//         this.year=newValue
//     }
//     addDriver =function  (driver) {
//         this.driver=driver
//     }
// }
// let car1 = new Car('RS7', 'Audi', 2012, 304, 4)
// console.log(car1)
// console.log('------------------------------')
// car1.info();
// car1.drive()
// console.log('------------------------------')
// car1.increaseMaxSpeed(20)
// car1.drive()
// console.log('------------------------------')
// car1.changeYear(20014)
// car1.info();
// console.log('------------------------------')
// car1.addDriver({name:'Artem',stage:10,age:20})
//  console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let cinderellaArr = [
//     new Cinderella('Anna', 20, 38),
//     new Cinderella('Diana', 20, 36),
//     new Cinderella('Masha', 18, 37),
//     new Cinderella('Ira', 23, 34),
//     new Cinderella('Lilia', 20, 35),
//     new Cinderella('Anabel', 19, 37),
//     new Cinderella('Gala', 25, 40),
//     new Cinderella('Maruna', 20, 41),
//     new Cinderella('Alla', 22, 32),
//     new Cinderella('Nastia', 20, 38)
// ]
// console.log(cinderellaArr)
//
// class Prince {
//     constructor(name, age, shose) {
//         this.name = name;
//         this.age = age;
//         this.shose = shose;
//     }
// }
//
// let princ = new Prince('Artem', 21, 36)

// for (let i = 0; i < cinderellaArr.length; i++) {
//     if (princ.shose === cinderellaArr[i].size) {
//         console.log(`Твоя попелюшка - ${cinderellaArr[i].name}, її ${cinderellaArr[i].age} років, в неї ${cinderellaArr[i].size} розмір ноги`)
//     }
//
// }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let find = cinderellaArr.find((item) => item.size === princ.shose);
// console.log(find);



