const express = require("express");
const app = express();
const port = 3001;

// Route de base
app.get("/", (req, res) => {
  res.send("Bienvenue sur votre application Express !");
});

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});
