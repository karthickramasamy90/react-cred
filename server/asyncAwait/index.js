console.log("Before");
getUsers(1, (user) => {
    console.log("user", user);
    gitReposetires(user.useeName, (repos) => {
        console.log("repos", repos);
        commits(repos[0], (repos) => {
            console.log("commit", repos);
        })
    })
});
console.log("After")

function getUsers(id, callback) {
    setTimeout(() => {
        console.log("Render from set timeout")
        callback({ id: id, userName: "karthick" })
    }, 3000);
}

function gitReposetires(name, callback) {
    setTimeout(() => {
        console.log("Rendering git repos");
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

function commits(repo, callback) {
    setTimeout(() => {
        console.log("Comments from git repos");
        callback(['comment 1', 'comment 2', 'comment 3'])
    }, 2000);
}