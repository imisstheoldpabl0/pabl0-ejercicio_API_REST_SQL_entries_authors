const queries = {
    getAllEntries: `
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
FROM entries AS e
INNER JOIN authors AS a
ON e.id_author=a.id_author
ORDER BY e.title;
`,
    updateEntryByTitle: `
UPDATE entries
    SET
        title=$1, 
        content=$2, 
        date=$3, 
        category=$4,
        id_author=(SELECT id_author FROM authors WHERE email = $5)
    WHERE 
        title = $6`,
    deleteEntryByTitle: `
DELETE entries
    WHERE
        title=$1`
};

module.exports

module.exports = queries;