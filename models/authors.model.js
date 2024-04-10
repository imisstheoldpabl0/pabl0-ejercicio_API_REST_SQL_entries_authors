// MODEL MINE

const queries = require("../queries/authors.queries.js"); // Requiere SQL queries
const pool = require("../config/db_pgsql.js"); // Require pool connect

const getAllAuthorsData = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllAuthorsData)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

const getAuthorEntriesByEmail = async () => {
    const { email } = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAuthorEntriesByEmail, [
            email
        ]);
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

const postCreateUserWithEmail = async () => {
    const { email } = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.postCreateUserWithEmail, [
            email
        ]);
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

const updateAuthorDataByEmail = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthorDataByEmail, [
            name,
            surname,
            email,
            image
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
    getAllAuthorsData,
    getAuthorEntriesByEmail,
    postCreateUserWithEmail,
    updateAuthorDataByEmail
};

module.exports = entries;