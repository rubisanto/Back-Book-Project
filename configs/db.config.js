const dotvenv = require("dotenv");
dotvenv.config();

const { Client } = require("pg");

// Configuration de la base de données
const db = {
  databaseUrl: process.env.DATABASE_URL,
};

// Créer une fonction pour se connecter à la base de données
async function connectToDatabase() {
  const client = new Client({
    connectionString: db.databaseUrl,
  });

  try {
    await client.connect();
    console.log("Connecté avec succès à la base de données PostgreSQL");
    return client; // Retourner le client connecté
  } catch (err) {
    console.error("Erreur de connexion :", err);
    throw err; // Propager l'erreur pour que l'appelant puisse la gérer
  }
}

module.exports = connectToDatabase;
