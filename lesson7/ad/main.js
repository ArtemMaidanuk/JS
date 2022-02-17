// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// class User {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website,names,catchPhrase,bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street,
//             suite,
//             city,
//             zipcode,
//         }
//         this.address.geo = {
//             lat,
//             lng
//         }
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name:names,
//             catchPhrase,
//             bs,
//         }
//         this.company.name
//
//     }
// }
//
// let users = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
//     'Apt. 556', 'Gwenborough', '92998-3874','-37.3159','81.1496', '1-770-736-8031 x56442',
//     'hildegard.org', 'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
//
// console.log(users);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
//
// }
//
// let tagA = new Tag('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
//     [{titleOfAttr: 'href', actionOfAttr: `Задает адрес документа, на который следует перейти`},
//         {titleOfAttr: 'name', actionOfAttr: `Устанавливает имя якоря внутри документа`},
//     ]);
// let tagDiv = new Tag('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого`,
//     [{titleOfAttr: 'align', actionOfAttr: `Задает выравнивание содержимого тега`},
//         {titleOfAttr: 'title', actionOfAttr: `Добавляет всплывающую подсказку к содержимому`},
//     ])
// let tagH1 = new Tag('h1', `тег <h1> представляет собой наиболее важный заголовок первого уровня`,
//     [{titleOfAttr: 'align', actionOfAttr: `Определяет выравнивание заголовка`},
//         {
//             titleOfAttr: 'class',
//             actionOfAttr: `Определяет имя класса, которое позволяет связать тег со стилевым оформлением`
//         },
//     ]);
// let tagSpan = new Tag('span', `Тег <span> предназначен для определения строчных элементов документа.`,
//     [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: `Позволяет получить доступ к элементу с помощью заданного сочетания клавиш`
//     },
//         {
//             titleOfAttr: 'contenteditable',
//             actionOfAttr: `Сообщает, что элемент доступен для редактирования пользователем.`
//         },
//     ]);
// let tagInput = new Tag('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса`,
//     [{
//         titleOfAttr: 'alt',
//         actionOfAttr: `Альтернативный текст для кнопки с изображением`
//     },
//         {
//             titleOfAttr: 'align',
//             actionOfAttr: `Определяет выравнивание изображения.`
//         },
//     ]);
// let tagForm = new Tag('form', `Связывает поле с формой по её идентификатору. `,
//     [{
//         titleOfAttr: 'accept-charset',
//         actionOfAttr: `Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные`
//     },
//         {
//             titleOfAttr: 'name',
//             actionOfAttr: `Имя формы`
//         },
//     ]);
// let tagOption = new Tag('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. `,
//     [{
//         titleOfAttr: 'disabled',
//         actionOfAttr: `Заблокировать для доступа элемент списка`
//     },
//         {
//             titleOfAttr: 'label',
//             actionOfAttr: `Указание метки пункта списка`
//         },
//     ]);
// let tagSelect = new Tag('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка`,
//     [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: `Позволяет перейти к списку с помощью некоторого сочетания клавиш`
//     },
//         {
//             titleOfAttr: 'form',
//             actionOfAttr: `Связывает список с формой`
//         },
//     ]);
// console.log(tagA);
// console.log('-------------------');
// console.log(tagDiv);
// console.log('-------------------');
// console.log(tagH1);
// console.log('-------------------');
// console.log(tagSpan);
// console.log('-------------------');
// console.log(tagInput);
// console.log('-------------------');
// console.log(tagForm);
// console.log('-------------------');
// console.log(tagOption);
// console.log('-------------------');
// console.log(tagSelect);
