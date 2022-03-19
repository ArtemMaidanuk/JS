fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        let divUsers = document.createElement('div');
        divUsers.classList.add('users')
        let userDetail = JSON.parse(localStorage.getItem('userDetails')) || [];
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('user');
            divUser.innerHTML = `<h2>${user.id}</h2>
                                   <p>${user.name}</p>`
            let buttonUser = document.createElement('button');
            buttonUser.classList.add('buttonUser');
            buttonUser.innerText = 'to user-details'
            buttonUser.onclick = function () {
                window.location.href='../html/user_detalis.html'
                userDetail.push(user);
                localStorage.setItem('userDetails', JSON.stringify(userDetail))
            }

            divUser.appendChild(buttonUser)
            divUsers.append(divUser);
            document.body.appendChild(divUsers)
        }
    })