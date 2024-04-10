// QUERIES MINE

const authorQueries = {
    getAllAuthorsData: `
SELECT a.id_author,a.name,a.surname,a.email,a.image
FROM authors AS a
ORDER BY a.name;
`,
    getAuthorEntriesByEmail: `
SELECT a.id_author,a.name,a.surname,a.email,a.image
FROM authors AS a
    WHERE
        email=$1;
    `,
    postCreateUserWithEmail: `
INSERT INTO entries
    VALUES
        email=$1`
};

module.exports

module.exports = authorQueries;