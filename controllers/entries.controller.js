// CONTROLLER MINE

const { error } = require('console');
const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

// Devuelve todas las 'entries' de la base de datos
const getAllEntries = async (req, res) => {
    let entries;
    if (req.query) {
        entries = await entry.getAllEntries();
    }
    else {
        res.status(error);
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

const updateEntryByTitle = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,category,email,old_title}
    const response = await entry.updateEntry(modifiedEntry);
    res.status(200).json({
        msg: "Se ha modificado la entry 'Título de noticia' ",
        "items_updated": response,
        data: modifiedEntry
    });
}

const deleteEntryByTitle = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,category,email,old_title}
    const response = await entry.updateEntry(modifiedEntry);
    res.status(200).json({
        msg: "Se ha borrado la entry 'Título de noticia' ",
        "items_updated": response,
        data: modifiedEntry
    });
}





module.exports = {
    getAllEntries,
    updateEntryByTitle,
    deleteEntryByTitle
}