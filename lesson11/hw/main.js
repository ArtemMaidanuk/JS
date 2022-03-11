// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let f1 = document.forms.form1
//     f1.onsubmit= function (e){
//     e.preventDefault();
//
//     let user = {userName:e.target.userName.value,age:e.target.userAge.value};
//     localStorage.setItem('userName',JSON.stringify(user));
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let f1 = document.forms.form2
// let carsArr = JSON.parse(localStorage.getItem('car')) || []
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let model = e.target.model.value;
//     let type = e.target.type.value;
//     let volume = e.target.volume.value;
//     let cars = {model, type, volume};
//     carsArr.push(cars)
//    localStorage.setItem('car',JSON.stringify(carsArr))
// };
