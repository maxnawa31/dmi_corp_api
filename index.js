const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.get('/', async function (req, res, next) {
  try {
    const result = await db.query(`SELECT * FROM strings`);
    return res.send(result.rows);
  } catch (err) {
    return next(err);
  }
})

app.post('/', async function (req, res, next) {
  const text = req.body.text;
  try {
    const result = await db.query(`INSERT INTO strings (text) VALUES ($1) RETURNING *`, [text]);
    return res.send(result.rows)
  } catch (err) {
    return next(err)
  }
})

app.listen(5000, () => {
  console.log('STARTED ON PORT 5000')
})