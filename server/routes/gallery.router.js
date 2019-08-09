const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/*
*** GET route for gallery_items table!
 */
router.get('/', (req, res) => {
    const sqlText = `SELECT * from "gallery_items";`;

    pool.query(sqlText)
    .then( (response)=>{
        res.send(response.rows);
    })
    .catch ( (error)=>{
        console.log('error with gallery content router get...', error);
        res.sendStatus(500);
        
    })
});

router.get('/:id', (req, res) => {

    const sqlText= `SELECT * from "gallery_items";`;

    const value = [req.params.id]

    pool.query(sqlText, value)
    .then( (response) => {
        res.send(response.rows[0]);
    })    
    .catch( (error) => {
        res.sendStatus(500);
        alert('could not get those details... try again later');
    })
}) 

/*
**** POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;