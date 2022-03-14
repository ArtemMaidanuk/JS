// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user) => {
        let users = document.createElement('div');
        users.className = "users";
        document.body.append(users);

        for (const userElement of user) {
            let user = document.createElement('div');
            user.className = "user";
            user.innerHTML = `<h3>Id — ${userElement.id}</h3>
                               <h3>Name — ${userElement.name}</h3>
                               <h3>Email — ${userElement.email}</h3>
                               <h3>Address:</h3>
                               <h4>Street — ${userElement.address.street}</h4>
                               <h4>Suite — ${userElement.address.suite}</h4>
                               <h4>City — ${userElement.address.city}</h4>
                               <h4>ZipCode — ${userElement.address.zipcode}</h4>
                               <h3>Geo:</h3>
                               <h4>Lat — ${userElement.address.geo.lat}</h4>
                               <h4>Lng — ${userElement.address.geo.lng}</h4>
                               <h3>Phone — ${userElement.phone}</h3>
                               <h3>Website — ${userElement.website}</h3>
                               <h3>Company:</h3>
                               <h4>Name — ${userElement.company.name}</h4>
                               <h4>CatchPhrase — ${userElement.company.catchPhrase}</h4>
                               <h4>Bs — ${userElement.company.bs}</h4>`
            users.append(user);
            let button = document.createElement('button');
            user.append(button);
            button.innerText = 'add post'
            button.onclick=function (e){
                e.defaultPrevented;
                fetch('https://jsonplaceholder.typicode.com/users/'+userElement.id+'/posts')
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
                                let divUserId = document.createElement('div')
                                let divId = document.createElement('div')
                                let divTitle = document.createElement('div')
                                let divBody = document.createElement('div')
                                wrap.append(post)
                                post.append(divUserId, divId, divTitle, divBody);

                                divUserId.innerText = `UserId — ${postElement.userId}`
                                divId.innerText = `Id — ${postElement.id}`
                                divTitle.innerText = `Title — ${postElement.title}`
                                divBody.innerText = `Body — ${postElement.body}`

                                let btn = document.createElement('button')
                                post.append(btn);
                                btn.innerText = 'add coment'
                                btn.onclick = function (e) {
                                    e.defaultPrevented;
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + postElement.id + '/comments')
                                        .then(response => {
                                            return response.json();
                                        })
                                        .then(comments => {
                                                for (const commentsElement of comments) {
                                                    if (postElement.id === commentsElement.postId) {
                                                        let cards = document.createElement('div');
                                                        cards.classList.add('cards')
                                                        cards.innerHTML = `<h3>PostId — ${commentsElement.postId}</h3>
                                      <h3>Id — ${commentsElement.id}</h3> 
                                      <h3>Name — ${commentsElement.name}</h3> 
                                      <h3>Email — ${commentsElement.email}</h3> 
                                      <p>Body — ${commentsElement.body}</p>`
                                                        comment.append(cards)
                                                    }}}
                                        )
                                }}}
                    )
            }}});
