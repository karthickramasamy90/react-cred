const express = require("express");
const { mockData } = require("./data")
const app = express();
const port = 3001;

app.get('/getUsers', (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.send(mockData);
    // res.send("App is running successfully");
});


app.listen(port, () => {
    console.log(`App is listening in port ${port}`)
});
