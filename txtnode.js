// txtnode.js

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getGitHubUserData(username) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}`;

    xhr.open("GET", url, true);
    xhr.setRequestHeader("User-Agent", "node.js");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const user = JSON.parse(xhr.responseText);
                console.log(`GitHub user "${username}" has ${user.public_repos} public repositories.`);
            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
    };

    xhr.send();
}

// Replace 'octocat' with any GitHub username
getGitHubUserData("octocat");
