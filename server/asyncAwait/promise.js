// const p = new Promise((resolve, reject) => {
//     // resolve("Promise succeeded", 1);

//     reject(new Error("Promise Failed"))
// })

// p.then(result => console.log(result)).catch(error => console.log(error))


console.log("Before");
// getUsers(1, (user) => {
//     console.log("user", user);
//     gitReposetires(user.userName, (repos) => {
//         console.log("repos", repos);
//         commits(repos[0], (repos) => {
//             console.log("commit", repos);
//         })
//     })
// });
console.log("After")

getUsers(1)
.then(user => gitReposetires(user.userName))
.then(repos => commits(repos))
.then(commit => console.log(`commit${commit}`))
.catch(error => console.log('error', error.message))

function getUsers(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Render from get users function timeout")
            resolve({ id: id, userName: "karthick" })
        }, 3000);
    })
}

function gitReposetires(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Rendering git repos");
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
    })
}

function commits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Comments from git repos");
            resolve(['comment 1', 'comment 2', 'comment 3'])
        }, 2000);
    })
}