// INDEX MINE

const express = require("express"); // Se declara requerimiento de express
require('dotenv').config(); // Se declara uso de dotenv
const app = express();// Se declara uso de express
const port = 3000; // Se declara el puerto 3000

// Routes
const entriesRoutes = require("./routes/authors.routes.js") // Se declara requerimiento de entries.routes.js

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// app.use
app.use('/api', entriesRoutes);
app.use(express.json());

// app.use
app.use('/api', authorsRoutes);
app.use(express.json());

// Listening Port
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });