import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
app.use(cors());
app.use(express.json());


// Api endpoints to get categories, subcategories, and duas
app.get('/api/categories', (req, res) => {
  db.all('SELECT * FROM category', [], (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
    });
});

app.get('/api/subcategories', (req, res) => {
    db.all('SELECT * FROM sub_category', [], (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
    });
});

app.get('/api/duas', (req, res) => {
    db.all('SELECT * FROM dua', [], (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
    });
});




app.listen(5000, () => console.log('Server running on port 5000'));