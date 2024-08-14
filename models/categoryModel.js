const pool = require('../config/db');

const getAllCategories = async () => {
    const result = await pool.query('SELECT * FROM Categories');
    return result.rows;
};

const createCategory = async (category) => {
    const { category_name, suppliers_id } = category;
    const result = await pool.query(
        'INSERT INTO Categories (category_name, suppliers_id) VALUES ($1, $2) RETURNING *',
        [category_name, suppliers_id]
    );
    return result.rows[0];
};

const updateCategory = async (id, category) => {
    const { category_name, suppliers_id } = category;
    const result = await pool.query(
        'UPDATE Categories SET category_name = $1, suppliers_id = $2 WHERE id = $3 RETURNING *',
        [category_name, suppliers_id, id]
    );
    return result.rows[0];
};

const deleteCategory = async (id) => {
    await pool.query('DELETE FROM Categories WHERE id = $1', [id]);
};

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
};