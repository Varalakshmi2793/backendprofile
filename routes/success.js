const express = require('express');
const path = require('path');
const rootdir = require('../pathdir/path');
const router = express.Router();

router.get('/success', (req, res) => {
    console.log('Success route accessed');
    res.sendFile(path.join(rootdir, '..', 'views', 'success.html'));
});

module.exports = router;
