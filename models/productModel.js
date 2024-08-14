const pool = require('../config/db');

const getAllProducts = async () => {
    const result = await pool.query('SELECT * FROM Products WHERE is_active = true');
    return result.rows;
};

const createProduct = async (product) => {
    const { product_name, supplier_id, category_id, description } = product;
    const result = await pool.query(
        'INSERT INTO Products (product_name, supplier_id, category_id, description) VALUES ($1, $2, $3, $4) RETURNING *',
        [product_name, supplier_id, category_id, description]
    );
    return result.rows[0];
};

const updateProduct = async (id, product) => {
    const { product_name, supplier_id, category_id, description } = product;
    const result = await pool.query(
        'UPDATE Products SET product_name = $1, supplier_id = $2, category_id = $3, description = $4 WHERE id = $5 RETURNING *',
        [product_name, supplier_id, category_id, description, id]
    );
    return result.rows[0];
};

const deactivateProduct = async (id) => {
    await pool.query('UPDATE Products SET is_active = false WHERE id = $1', [id]);
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deactivateProduct
};