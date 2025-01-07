import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

sqlite3.verbose();

// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to  database file
const dbPath = path.resolve(__dirname, 'dua_main.sqlite');

// Create a database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to connect to database:', err.message);
  } else {
    console.log('Connected to the existing SQLite database.');
  }
});

export default db;
