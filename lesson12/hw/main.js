// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, ' +
// 'за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//             let wrap = document.createElement('div');
//             wrap.classList.add('wrap');
//             document.body.append(wrap);
//             for (const postElement of posts) {
//                 let post = document.createElement('div');
//                 post.classList.add('post');
//                 wrap.append(post)
//                let divUserId= document.createElement('div')
//                 post.append(divUserId);
//                 let divId= document.createElement('div')
//                 post.append(divId);
//                 let divTitle= document.createElement('div')
//                 post.append(divTitle);
//                 let divBody= document.createElement('div')
//                 post.append(divBody);
//
//                 divUserId.innerText= `UserId — ${postElement.userId}`
//                 divId.innerText= `Id — ${postElement.id}`
//                 divTitle.innerText= `Title — ${postElement.title}`
//                 divBody.innerText= `Body — ${postElement.body}`
//             }
//     }
//
//     )

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => {
//         return response.json();
//     })
//     .then(comments => {
//             let wrap = document.createElement('div');
//             wrap.classList.add('wrap');
//             document.body.append(wrap);
//             for (const commentsElement of comments) {
//                 let comment = document.createElement('div');
//                 comment.classList.add('comment');
//                 wrap.append(comment)
//                 let divPostId= document.createElement('div')
//                 comment.append(divPostId);
//                 let divId= document.createElement('div')
//                 comment.append(divId);
//                 let divName= document.createElement('div')
//                 comment.append(divName);
//                 let divEmail= document.createElement('div')
//                 comment.append(divEmail);
//                 let divBody= document.createElement('div')
//                 comment.append(divBody);
//                 divPostId.innerText= `PostId — ${commentsElement.postId}`;
//                 divId.innerText= `Id — ${commentsElement.id}`;
//                 divName.innerText= `Name — ${commentsElement.name}`;
//                 divEmail.innerText= `Email — ${commentsElement.email}`;
//                 divBody.innerText= `Body — ${commentsElement.body}`;
//             }
//         }
//
//     )