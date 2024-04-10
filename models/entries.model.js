// MODEL MINE

const queries = require("../queries/entries.queries.js"); // Requiere SQL queries
const pool = require("../config/db_pgsql.js"); // Require pool connect

const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

const updateEntryByTitle = async (entry) => {
    const { title, content, date, category, email, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntryByTitle, [
            title,
            content,
            date,
            category,
            email,
            old_title
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const deleteEntryByTitle = async (entry) => {
    const { title, content, date, category, email, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntryByTitle, [
            title
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const entries = {
    getAllEntries,
    updateEntryByTitle,
    deleteEntryByTitle
};

module.exports = entries;