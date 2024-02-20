// Importer la fonction pour se connecter à la base de données
const connectToDatabase = require("./db.config");

// Fonction pour récupérer tous les livres depuis la base de données
async function getAllBooks() {
  try {
    // Se connecter à la base de données
    const client = await connectToDatabase();

    // Exécuter la requête SQL pour récupérer tous les livres
    const result = await client.query("SELECT * FROM books");

    // Fermer la connexion à la base de données
    await client.end();

    // Retourner les livres récupérés depuis la base de données
    return result.rows;
  } catch (error) {
    // Gérer les erreurs
    console.error("Erreur lors de la récupération des livres :", error);
    throw error;
  }
}

module.exports = {
  getAllBooks,
};
