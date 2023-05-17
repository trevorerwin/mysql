const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db.js');

router.get('/all-users', async (req, res) => {
  try {
    let sql = 'SELECT Username AS username from sitelok';

    db.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.json({ results: results });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
