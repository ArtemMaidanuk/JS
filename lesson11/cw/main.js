// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до
// масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let boxUser = document.getElementById('favorite-user');
let favorite = JSON.parse(localStorage.getItem('favorites')) || [];
for (const user of users) {
    let div = document.createElement('div');
    div.innerHTML = `${user.name}, </br>${user.age}, </br>${user.status},</br> `
    let bttn = document.createElement('button');
    bttn.innerText = 'to favorites';
    bttn.onclick = function (e) {
        e.preventDefault();
       favorite.push(user);
       localStorage.setItem('favorites',JSON.stringify(favorite))
    }
    div.append(bttn);
    boxUser.append(div);
}