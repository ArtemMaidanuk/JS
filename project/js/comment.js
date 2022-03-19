let posts = JSON.parse(localStorage.getItem('postDetails'));
for (const postsElement of posts) {
    let div = document.createElement('div');
    div.classList.add('posts');
    div.innerHTML = `<h3>UserId —  ${postsElement.userId}</h3>
                       <h4>Id — ${postsElement.id}</h4> 
                       <h4>Title — ${postsElement.title}</h4> 
                       <h4>Body — ${postsElement.body}</h4>  `
    document.body.appendChild(div)
    let commentButton = document.createElement('button');
    commentButton.innerText = 'my comments';
    commentButton.onclick = function (e) {
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/posts/${postsElement.id}/comments`)
            .then(response => {
                return response.json();
            })
            .then(comment=>{
                let commentsDiv = document.createElement('div');
                commentsDiv.classList.add('comments')
                for (const commentsElement of comment) {
                    if (postsElement.id=commentsElement.postId){
                        let commentDiv = document.createElement('div');
                        commentDiv.classList.add('comment')
                        commentDiv.innerHTML=`<h3>PostId — ${commentsElement.postId}</h3>
                                      <h3>Id — ${commentsElement.id}</h3> 
                                      <h3>Name — ${commentsElement.name}</h3> 
                                      <h3>Email — ${commentsElement.email}</h3> 
                                      <p>Body — ${commentsElement.body}</p>`
                        commentsDiv.append(commentDiv)
                    }
                }
                div.appendChild(commentsDiv)
        })
        commentButton.disabled = true;
    }
    div.appendChild(commentButton)
}