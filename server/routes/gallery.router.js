const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE
/////need to uncomment this
// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText =`SELECT * FROM gallery;`;
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

module.exports = router;