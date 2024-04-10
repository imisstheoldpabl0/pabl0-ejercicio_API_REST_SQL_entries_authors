// CONTROLLER MINE
const { error } = require('console');
const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

// Devuelve todas las 'entries' de la base de datos
const getAllAuthorsData = async (req, res) => {
    let allData;
    if (req.query) {
        allData = await data.getAllAuthorsData();
    }
    else {
        res.status(error);
    }
    res.status(200).json(allData); // [] con las entries encontradas
}

// Devuelve todas las 'entries' dependiendo del email que se le pase 
const getAuthorEntriesByEmail = async (req, res) => {
    const modifiedEntry = req.body; // {email}
    const response = await entry.updateEntry(modifiedEntry);
    res.status(200).json(response);
}

// Se envía por post los datos del autor a crear {email} y retorna un status 201 
const postCreateUserWithEmail = async (req, res) => {
    const modifiedEntry = req.body; // {email}
    const response = await entry.postCreateUser(modifiedEntry);
    res.status(201).json({
        msg: "usuario creado",
        "items_updated": response,
        data: modifiedEntry
    });
}

const updateUserWithEmail = async (req, res) => {
    const modifiedEntry = req.body; // {email}
    const response = await entry.postCreateUser(modifiedEntry);
    res.status(201).json({
        msg: "usuario actualizado",
        "items_updated": response,
        data: modifiedEntry
    });
}





module.exports = {
    getAllAuthorsData,
    getAuthorEntriesByEmail,
    postCreateUserWithEmail
}