const pool = require('../config/db');

const getAllPayments = async () => {
    const result = await pool.query('SELECT * FROM Payments WHERE is_active = true');
    return result.rows;
};

const createPayment = async (payment) => {
    const { invoice_id, payment_date, payment_amount, payment_type } = payment;
    const result = await pool.query(
        'INSERT INTO Payments (invoice_id, payment_date, payment_amount, payment_type) VALUES ($1, $2, $3, $4) RETURNING *',
        [invoice_id, payment_date, payment_amount, payment_type]
    );
    return result.rows[0];
};

const updatePayment = async (id, payment) => {
    const { invoice_id, payment_date, payment_amount, payment_type } = payment;
    const result = await pool.query(
        'UPDATE Payments SET invoice_id = $1, payment_date = $2, payment_amount = $3, payment_type = $4 WHERE id = $5 RETURNING *',
        [invoice_id, payment_date, payment_amount, payment_type, id]
    );
    return result.rows[0];
};

const deactivatePayment = async (id) => {
    await pool.query('UPDATE Payments SET is_active = false WHERE id = $1', [id]);
};

module.exports = {
    getAllPayments,
    createPayment,
    updatePayment,
    deactivatePayment
};