const pool = require('../config/db');

const getAllInvoiceDetails = async () => {
    const result = await pool.query('SELECT * FROM InvoiceDetails WHERE is_active = true');
    return result.rows;
};

const createInvoiceDetail = async (invoiceDetail) => {
    const { supplier_id, invoice_date, payment_date, total_amount, product_id, quantity } = invoiceDetail;
    const result = await pool.query(
        'INSERT INTO InvoiceDetails (supplier_id, invoice_date, payment_date, total_amount, product_id, quantity) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [supplier_id, invoice_date, payment_date, total_amount, product_id, quantity]
    );
    return result.rows[0];
};

const updateInvoiceDetail = async (id, invoiceDetail) => {
    const { supplier_id, invoice_date, payment_date, total_amount, product_id, quantity } = invoiceDetail;
    const result = await pool.query(
        'UPDATE InvoiceDetails SET supplier_id = $1, invoice_date = $2, payment_date = $3, total_amount = $4, product_id = $5, quantity = $6 WHERE id = $7 RETURNING *',
        [supplier_id, invoice_date, payment_date, total_amount, product_id, quantity, id]
    );
    return result.rows[0];
};

const deactivateInvoiceDetail = async (id) => {
    await pool.query('UPDATE InvoiceDetails SET is_active = false WHERE id = $1', [id]);
};


module.exports = {
    getAllInvoiceDetails,
    createInvoiceDetail,
    updateInvoiceDetail,
    deactivateInvoiceDetail
};