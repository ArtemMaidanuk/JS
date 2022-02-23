// let users = [
//     {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }
// ];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let newUser = [];
// for (const user of users) {
//     newUser.push(user.address)
// }
// console.log(newUser)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Всі данні в одному блоці.

// for (const user of users) {
//     let createDiv = document.createElement('div');
//     createDiv.classList.add('flex')
//     let userDiv = document.createElement('div');
//     userDiv.innerHTML = `Ім'я  - ${user.name}.</br> Вік -  ${user.age}.</br>
//  Статус -  ${user.status}.</br> Місто -  ${user.address.city}. </br> Країна -  ${user.address.country}. </br>
// Вулиця -  ${user.address.street}. </br> Будинок -  ${user.address.houseNumber}. </br>
// `
//
//     document.body.append(createDiv);
//     createDiv.append(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let createDiv = document.createElement('div');
//     createDiv.classList.add('flex')
//     let nameDiv = document.createElement('div');
//     nameDiv.innerHTML = `Ім'я  - ${user.name}`
//     let ageDiv = document.createElement('div');
//     ageDiv.innerHTML = `Вік - ${user.age}`
//     let statusDiv = document.createElement('div');
//     statusDiv.innerHTML = `Статус -  ${user.status}`
//     let addressDiv = document.createElement('div');
//     addressDiv.innerHTML = `Місто -  ${user.address.city}. </br> Країна -  ${user.address.country}. </br>
// Вулиця -  ${user.address.street}. </br> Будинок -  ${user.address.houseNumber}. </br>`
//
//     document.body.append(createDiv);
//     createDiv.append(nameDiv);
//     createDiv.append(ageDiv);
//     createDiv.append(statusDiv);
//     createDiv.append(addressDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     let createDiv = document.createElement('div');
//     createDiv.classList.add('flex')
//     let nameDiv = document.createElement('div');
//     nameDiv.innerHTML = `Ім'я  - ${user.name}`
//     let ageDiv = document.createElement('div');
//     ageDiv.innerHTML = `Вік - ${user.age}`
//     let statusDiv = document.createElement('div');
//     statusDiv.innerHTML = `Статус -  ${user.status}`
//     let addressDiv = document.createElement('div');
//     let cityDiv = document.createElement('div');
//     cityDiv.innerHTML=`Місто -  ${user.address.city}.`
//     let countryDiv = document.createElement('div');
//     countryDiv.innerHTML=`Країна -  ${user.address.country}.`
//     let streetDiv = document.createElement('div');
//     streetDiv.innerHTML=`Вулиця -  ${user.address.street}.`
//     let houseNumberDiv = document.createElement('div');
//     houseNumberDiv.innerHTML=`Будинок -  ${user.address.houseNumber}.`
//     document.body.append(createDiv);
//     createDiv.append(nameDiv);
//     createDiv.append(ageDiv);
//     createDiv.append(statusDiv);
//     createDiv.append(addressDiv);
//     addressDiv.append(cityDiv);
//     addressDiv.append(countryDiv);
//     addressDiv.append(streetDiv);
//     addressDiv.append(houseNumberDiv);
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка
// вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let h2 = document.getElementsByTagName('h2');
// for (const Element of h2) {
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//     li.innerText = Element.innerText;
//     let id = document.getElementById('content');
//     id.append(ul);
//     ul.append(li)
//
// }


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

for (const rule of rules) {
    let div = document.createElement('div');
    div.classList.add('first');
    let title= document.createElement('div');
    title.innerHTML = `<strong>Правило бійцівського клубу:</strong>  ${rule.title}`
    let body = document.createElement('div');
    body.innerHTML = `<strong>Значення правила:</strong>  ${rule.body}`
    document.body.append(div);
    div.append(title);
    div.append(body)
}
