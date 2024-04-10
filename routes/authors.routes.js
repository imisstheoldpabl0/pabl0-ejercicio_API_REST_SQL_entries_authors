// MODEL MINE

const express = require('express');
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

// Rutas de authors
// [GET] http://localhost:3000/api/authors
router.get('/authors', authorsController.getAllAuthorsData);

// [GET] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es
router.get('/authors', authorsController.getAllAuthorsData);

// [POST] http://localhost:3000/api/authors
router.get('/authors', authorsController.getAllAuthorsData);


module.exports = router;