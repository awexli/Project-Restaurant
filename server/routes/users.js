const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json([{
        id: 1,
        username: "SunnyD"
    }, {
        id:2,
        username: "SunnyD2"
    }
    ]);
});

module.exports = router;
