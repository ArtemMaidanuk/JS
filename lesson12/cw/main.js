// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
            let wrap = document.createElement('div');
            wrap.classList.add('wrap');
            let comment = document.createElement('div');
            comment.classList.add('comment');
            document.body.append(wrap);
            document.body.append(comment);
            for (const postElement of posts) {
                let post = document.createElement('div');
                post.classList.add('post');
               let divUserId= document.createElement('div')
                let divId= document.createElement('div')
                let divTitle= document.createElement('div')
                let divBody= document.createElement('div')
                wrap.append(post)
                post.append(divUserId,divId,divTitle,divBody);

                divUserId.innerText= `UserId — ${postElement.userId}`
                divId.innerText= `Id — ${postElement.id}`
                divTitle.innerText= `Title — ${postElement.title}`
                divBody.innerText= `Body — ${postElement.body}`

                let btn= document.createElement('button')
                post.append(btn);
                btn.innerText='add coment'
                btn.onclick=function (e){
                    e.defaultPrevented;
                    fetch('https://jsonplaceholder.typicode.com/posts/'+postElement.id+'/comments')
    .then(response => {
        return response.json();
    })
    .then(comments => {
            for (const commentsElement of comments) {
                if (postElement.id=commentsElement.postId){
                let cards = document.createElement('div');
                cards.classList.add('cards')
                    cards.innerHTML=`<h3>PostId — ${commentsElement.postId}</h3>
                                      <h3>Id — ${commentsElement.id}</h3> 
                                      <h3>Name — ${commentsElement.name}</h3> 
                                      <h3>Email — ${commentsElement.email}</h3> 
                                      <p>Body — ${commentsElement.body}</p>`
                    comment.append(cards)
                }
            }
        }

    )

                }
            }
    }

    )