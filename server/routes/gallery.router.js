const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const idToUpdate = req.params.id
    const sqlText = `UPDATE gallery SET "likes" = "likes" + 1 WHERE "id"=$1`
    pool.query(sqlText, [idToUpdate])
    .then((result) =>{
        console.log(result.rows);
        res.sendStatus(200);
    }).catch(error => {
        console.log(error)
        res.sendStatus(500);
    })
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText =`SELECT * FROM gallery ORDER BY "id";`;
    pool.query(sqlText)
    .then((result) => {
        console.log('Got my stuff from the data base')
        res.send(result.rows);
    })
    .catch((error) =>{
        console.log('Error making database query', error);
        res.sendStatus(500);
    })

    
}); // END GET Route



// POST Route
router.post('/newImage', (req, res) =>{
    const newImage = req.body;
    const sqlText = `INSERT INTO gallery ("path", "description") VALUES ($1, $2);`
    pool.query(sqlText, [newImage.path, newImage.description])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
}); // End POST Route








router.delete('/:id', (req, res) =>{
    const idToDelete = req.params.id;
    const sqlText = `DELETE FROM gallery 
    WHERE "id" = $1;`
    pool.query(sqlText, [idToDelete])
    .then((result) => {
        console.log(result)
        res.sendStatus(200)
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;