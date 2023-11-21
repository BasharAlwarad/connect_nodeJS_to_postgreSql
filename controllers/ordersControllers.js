const pool = require('../DB/dbConnection.js');

// GET all orders
const getAllOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET one order by ID
const getOneOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST create a new order
const createOneOrders = async (req, res) => {
  const { price, date, user_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *',
      [price, date, user_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// PUT edit one order by ID
const updateOneOrders = async (req, res) => {
  const { id } = req.params;
  const { price, date, user_id } = req.body;
  try {
    const result = await pool.query(
      'UPDATE orders SET price = $1, date = $2, user_id = $3 WHERE id = $4 RETURNING *',
      [price, date, user_id, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// DELETE one order by ID
const deleteOneOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'DELETE FROM orders WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllOrders,
  getOneOrders,
  createOneOrders,
  updateOneOrders,
  deleteOneOrders,
};
