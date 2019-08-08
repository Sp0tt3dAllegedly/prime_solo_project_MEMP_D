const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `SELECT * from "home_page_content";`;

    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('error with home page content router get...', error);
            res.sendStatus(500);

        })
});

module.exports = router;