const express = require("express");
const app = express();
const port = 3001;

// Route de base
app.get("/", (req, res) => {
  res.send("Bienvenue sur votre application Express !");
});

// Nouvelle route "catalog"
app.get("/catalog", (req, res) => {
  res.send("Bienvenue sur la page du catalogue !");
});

// Nouvelle route "my-books"
app.get("/my-books", (req, res) => {
  res.send("Bienvenue sur la page de mes livres !");
});

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});
