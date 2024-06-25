const {turso} = require('../config/db');

exports.getAll = async (req, res) => {
    try {
        const query = 'SELECT * FROM Hiragana';
        const results = await turso.execute(query);
        res.json(results);
    } catch (error) {
        console.error('Error al obtener todos los datos de hiragana:', error);
        res.status(500).json({ error: 'Error al obtener datos de hiragana' });
    }
};

exports.getGroup = async (req, res) => {
    const group = req.query.group;
    if (!group) {
        res.status(400).send('Group is required');
        return;
    }

    try {
        const query = 'SELECT * FROM Hiragana WHERE letter = :group';
        const results = await turso.execute({
            sql: query,
            args: { group },
        });
        res.json(results);
    } catch (error) {
        console.error('Error al obtener el grupo de hiragana:', error);
        res.status(500).json({ error: 'Error al obtener el grupo de hiragana' });
    }
};