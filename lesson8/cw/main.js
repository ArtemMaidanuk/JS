// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let elementById = document.getElementById('main_header');
//
// elementById.classList='dec_2021'
// console.log(elementById)

// b) робить шириниу елементу ul 400px

// let elementsByTagName = document.getElementsByTagName("ul");
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.width='400px'
// }


// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.width='50%'
// }


// d) отримує текст який зберігається в елементі з класом listElement2

// let elementsByClassName1 = document.getElementsByClassName('listElement2');
// console.log(elementsByClassName1)
// console.log(elementsByClassName1[0].innerText)


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagNameLi = document.getElementsByTagName('li');
// for (const elementsByTagNameLiElement of elementsByTagNameLi) {
//     elementsByTagNameLiElement.style.background='silver'
//     elementsByTagNameLiElement.style.marginTop='5px'
// }



// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsByTagNameA = document.getElementsByTagName('a');
// for (const elementsByTagNameAElement of elementsByTagNameA) {
//     elementsByTagNameAElement.classList='anchor'
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

// let elementsByTagNameA = document.getElementsByTagName('a');
// for (let i = 0; i < elementsByTagNameA.length; i++) {
//    if(elementsByTagNameA[i].innerText==='link3') {
//        elementsByTagNameA[i].style.fontSize='40px'
//    }
//
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementsByTagNameA = document.getElementsByTagName('a');
// for (const elementsA of elementsByTagNameA) {
//     let XXX=elementsA.innerText;
//     elementsA.classList.add(`element_${XXX}`);
// }



// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementsByTagName = document.getElementsByClassName('sub-header');
// for (const elements of elementsByTagName) {
//     let sms =prompt('Введіть колір: (red,yellow, green, blue,black  )');
//     elements.style.color = sms
// }



// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// let elementsByTagName = document.getElementsByClassName('sub-header');
// for (const elements of elementsByTagName) {
//
//     let sms =prompt('Введіть колір: (red,yellow, green, blue,black )');
//     if(elements.innerText==='content 2 segment'){
//         elements.style.color = sms
//     }
//
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

 // let elementsByContent = document.getElementsByClassName('content_1');
 // console.log(elementsByContent[0].innerText)
 // for (const elementsByContentElement of elementsByContent) {
 //     elementsByContentElement.innerHTML=`<p>${prompt(`Введіть текст:` )}</p>`
 // }




// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName('p');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.padding='20px'
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsByClassName = document.getElementsByClassName('text2');
//     elementsByClassName[0].textContent='dec-2021'

