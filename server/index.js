const config = require("config")
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const { logger }  = require("./middleware/logger");
const { auth } = require("./middleware/auth");
const geners = require("./routes/geners");
const home = require("./routes/home");

// process.env.NODE_ENV;
// console.log(`Node env ${process.env.NODE_ENV}`)
// console.log(`App get ${app.get('env')}`)

app.use(express.json());
app.use(logger);
app.use(auth);

// app.use(helmet());
app.use('/', home)
app.use('/api/geners', geners)


if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log("Morgan enabled")
}

const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'backend-api',
    password: 'Think@123',
    dialect: 'postgres',
    port: 5432
});

// const bodyParser = require("body-parser");
// app.use(bodyParser);
// app.use(bodyParser.urlencoded({ extended: false }));

pool.connect((err, client, release) => {
    if(err) {
        console.log("Error in connection DB", err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()

        if(err) {
            return console.error('Error executing query', err.stack)
        }

        console.log("Connected to Database!")
    })
})

mongoose.connect("mongodb://localhost/playground")
.then(() => console.log("Connected to mongoDB..."))
.catch((err) => console.log("Could not connected to mongoDB", err))

const genersSchema = new mongoose.Schema({
    id: String,
    type: String,
    language: String,
    date: { type: Date, default: Date.now }
},{
    collection: 'geners',
    timestamps: true
});

const GenersModel = mongoose.model('Geners', genersSchema);

async function createGeners() {
    const geners = new GenersModel(
    {
        id: 3,
        type: "drama",
        language: "tamil"
    });
    
    const result = await geners.save();
    console.log("result", result)
    
}

createGeners();

// app.get("/testdata", (req, res, next) => {
//     console.log("test data")

//     pool.query('Select * from test')
//     .then(testData => {
//         console.log("testData", testData)
//         res.send(testData.rows)
//     })
// })

app.get('/getdata/:month/:year', (req,res) => {
    console.log("testData", req)
    res.send(req.params);
    // res.send(req.query);
});

// app.put('/api/geners')

// app.delete('/api/geners')

const server = app.listen(3001, () => {
    let host = server.address().address
    let port = server.address().port

    console.log("host", host)
    console.log("port", port)
})
