document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Nana-John')
        .then((res) => res.json())
        .then((json) => {
            nameElement.innerText = json.name || 'No name available';
            usernameElement.innerText = json.login || 'No username';
            avatarElement.src = json.avatar_url || '';
            reposElement.innerText = json.public_repos || 0;
            followersElement.innerText = json.followers || 0;
            followingElement.innerText = json.following || 0;
            linkElement.href = json.html_url || '#';
        })
        .catch((error) => {
            console.log('Ocorreu um erro:', error);
        });
});
