const dotvenv = require("dotenv");
dotvenv.config();

// Configuration de la base de données
// à adapter
const db = {
  databaseUrl: process.env.DATABASE_URL,
};

module.exports = db;
