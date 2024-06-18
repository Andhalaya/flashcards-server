const {connection} = require('../config/db');

exports.getAll = (req, res) => {
    const query = 'SELECT * FROM hiragana';
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
};

exports.getGroup = (req, res) => {
    const group = req.query.group;
    if (!group) {
        res.status(400).send('Group is required');
        return;
    }

    const query = 'SELECT * FROM hiragana WHERE letter = ?';
    connection.query(query, [group], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
}