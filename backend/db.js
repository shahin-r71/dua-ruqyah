const sqlite3 = require('sqlite3');
const path = require('path');

// Path to database file
const dbPath = path.resolve(__dirname, 'dua_main.sqlite');

// Enable verbose mode for SQLite3
sqlite3.verbose();

// Create a database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to connect to database:', err.message);
  } else {
    console.log('Connected to the existing SQLite database.');
  }
});

module.exports = db;
