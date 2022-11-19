const express = require('express')
const router = express.Router()
const controls = require('../controller/controls')

router.get("/getallflight", controls.getAllFlight);
router.get("/:id", controls.getSingleFlight);
router.post('/bookFlight', controls.bookFlight);
router.delete('/:id', controls.deleteFlight)
router.patch('/:id', controls.updateFlight)


module.exports = router;