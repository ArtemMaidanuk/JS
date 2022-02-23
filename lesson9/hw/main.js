// // Все робити за допомоги js.
// // - створити блок,
//
// let elementDiv = document.createElement('div');
//
// //     - додати йому класи wrap, collapse, alpha, beta
//
// elementDiv.classList.add('wrap','collapse','alpha','beta');
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// elementDiv.style.background='blue';
// elementDiv.style.color='yellow';
// elementDiv.style.fontSize='20px';
//
// // - додати цей блок в body.
//
// document.body.append(elementDiv);
//
// // - клонувати його повністю, та додати клон в body.
//
// let clonDiv = elementDiv.cloneNode();
//
// document.body.append(clonDiv);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr =  ['Main','Products','About us','Contacts']
//
// for (const string of arr) {
//     let createLi = document.createElement('li');
//     createLi.innerText=string
//     let classMenu = document.getElementsByClassName('menu')[0];
//     classMenu.appendChild(createLi)
// }

// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const coursesArr of coursesAndDurationArray) {
//     let createDiv = document.createElement('div')
//     createDiv.innerHTML=`<strong>Назва курсу</strong> - ${coursesArr.title}. Кількість навчання - ${coursesArr.monthDuration} місяців`;
//     `Кількість навчання - ${coursesArr.monthDuration} місяців`
//
//    document.body.appendChild(createDiv);
// }


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const coursesArr of coursesAndDurationArray) {
//     let createDiv = document.createElement('div')
//     createDiv.classList.add('item')
//     let createH1 = document.createElement('h1')
//     createH1.classList.add('heading')
//     let createP = document.createElement('p')
//     createP.classList.add('description')
//     createH1.innerText=`Назва курсу - ${coursesArr.title}`;
//     createP.innerText=`Кількість навчання - ${coursesArr.monthDuration} місяців`
//
//    document.body.appendChild(createDiv);
//     createDiv.append(createH1);
//     createDiv.append(createP);
// }