// MODEL MINE

const express = require('express');
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

// Rutas de entries
// [GET] http://localhost:3000/api/entries
router.get('/entries', entriesController.getAllEntries);

// [POST] http://localhost:3000/api/entries
router.post('/entries', entriesController.updateEntryByTitle);

// [DELETE] http://localhost:3000/api/entries
router.delete('/entries', entriesController.deleteEntryByTitle);

module.exports = router;