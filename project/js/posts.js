let users = JSON.parse(localStorage.getItem('userDetails'));
for (const userElement of users) {
    let div = document.createElement('div');
    div.classList.add('user')
    div.innerHTML = `<h3>Id — ${userElement.id}</h3>
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
    document.body.append(div)
    let postButton = document.createElement('button');
    postButton.innerText = 'post of current user'
    postButton.onclick = function () {
        fetch(` https://jsonplaceholder.typicode.com/users/${userElement.id}/posts`)
            .then(response => {
                return response.json();
            })
            .then(posts => {
                let divPosts= document.createElement('div')
                divPosts.classList.add('posts')
                let postDetail = JSON.parse(localStorage.getItem('postDetails')) || [];
                for (const post of posts) {
                    let divPost= document.createElement('div')
                    divPost.classList.add('post')
                    divPost.innerHTML=`<h3>${post.title}</h3>`
                    let buttonPost = document.createElement('button');
                    buttonPost.classList.add('buttonUser');
                    buttonPost.innerText = 'to user-details'
                    buttonPost.onclick = function () {
                        window.location.href='../html/post_details.html'
                        postDetail.push(post);
                        localStorage.setItem('postDetails', JSON.stringify(postDetail))}
                    div.append(divPosts)
                    divPost.appendChild(buttonPost)
                    divPosts.appendChild(divPost)
                }

            })
    }

    div.append(postButton)
}


