const express = require("express");
const router = express.Router();

let moviesGenres = [
    {
        id: 1,
        type: "action",
        language: "english"
    },
    {
        id: 2,
        type: "horror",
        language: "english"
    },
    {
        id: 3,
        type: "drama",
        language: "tamil"
    },
    {
        id: 4,
        type: "thriller",
        language: "telegu"
    },
    {
        id: 5,
        type: "scienceFiction",
        language: "english"
    }
];

// Get Method
router.get('/', (req, res) => {
    res.send(moviesGenres);
});

// Get by single id
router.get('/:id', (req, res) => {
    const genres = moviesGenres.find(value => value.id === parseInt(req.params.id));
    if(!genres) return res.status(404).send("The geners with the given ID is not found");
    
    res.send(genres);
});

// Post method 
router.post('/', (req, res) => {
    const newGeners = {
        id: moviesGenres.length + 1,
        type: req.body.type,
        language: req.body.language
    }
    moviesGenres.push(newGeners);
    res.send(newGeners);
});

// PUT method
router.put('/:id', (req, res) => {
    const geners = moviesGenres.find(value => value.id === parseInt(req.params.id));
    if(!geners) return res.status(404).send("The geners with the given ID is not found");

    geners.type = req.body.type;
    res.send(geners);
});

router.delete('/:id', (req, res) => {
    const genres = moviesGenres.find(value => value.id === parseInt(req.params.id));
    if(!genres) return res.status(404).send("The geners with the given ID is not found");
    const index = moviesGenres.indexOf(genres);

    moviesGenres.splice(index, 1);
    res.send(genres);
})

module.exports = router;