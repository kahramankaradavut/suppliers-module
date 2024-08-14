const pool = require('../config/db');

const getAllSuppliers = async () => {
    const result = await pool.query('SELECT * FROM Suppliers WHERE is_active = true');
    return result.rows;
};

const createSupplier = async (supplier) => {
    const { company_name, contact_name, contact_email, contact_phone, address, city, country, rate, type, tiger_code } = supplier;
    const result = await pool.query(
        'INSERT INTO Suppliers (company_name, contact_name, contact_email, contact_phone, address, city, country, rate, type, tiger_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [company_name, contact_name, contact_email, contact_phone, address, city, country, rate, type, tiger_code]
    );
    return result.rows[0];
};

const updateSupplier = async (id, supplier) => {
    const { company_name, contact_name, contact_email, contact_phone, address, city, country, rate, type, tiger_code } = supplier;
    const result = await pool.query(
        'UPDATE Suppliers SET company_name = $1, contact_name = $2, contact_email = $3, contact_phone = $4, address = $5, city = $6, country = $7, rate = $8, type = $9, tiger_code = $10 WHERE id = $11 RETURNING *',
        [company_name, contact_name, contact_email, contact_phone, address, city, country, rate, type, tiger_code, id]
    );
    return result.rows[0];
};

const deactivateSupplier = async (id) => {
    await pool.query('UPDATE Suppliers SET is_active = false WHERE id = $1', [id]);
};

module.exports = {
    getAllSuppliers,
    createSupplier,
    updateSupplier,
    deactivateSupplier
};