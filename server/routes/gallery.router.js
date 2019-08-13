const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// ***> GET route for gallery_items table to display entire gallery!

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

// ***> GET route for gallery_items table to display item details by id!

router.get('/:id', (req, res) => {


    const sqlText = `SELECT "gallery_items"."photo_url", "gallery_items"."name", 
                            "gallery_items"."price", "gallery_items"."description" from "gallery_items"
                    WHERE   "gallery_items"."id" = $1;`;

    const value = [req.params.id]

    pool.query(sqlText, value)
    
        .then( (response) => {
            console.log(response);
            
            res.send(response.rows[0]);
            
        }) 

        .catch( (error) => {
            console.log('error getting details', error);
            
            res.sendStatus(500);
            alert('could not get those details... try again later');
        })

}); 

/*
**** POST route template
 */
router.post('/', (req, res) => {
    const postData = req.body;
        console.log('req.body is...', req.body);
    const sqlText = `INSERT INTO "gallery_items" (photo_url, name, price, description)
                    VALUES ($1, $2, $3, $4);`
    const values = [postData.photo_url, postData.name, postData.price, postData.description]
        console.log('values are...', values);
    pool.query(sqlText, values)
    .then((result) => {
        console.log('the new item is posted', result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`error with adding ${sqlText}`, error);
        res.sendStatus(500);
    })

});

module.exports = router;