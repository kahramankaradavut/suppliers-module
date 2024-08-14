const paymentModel = require('../models/paymentModel');

const getAllPayments = async (req, res) => {
    try {
        const payments = await paymentModel.getAllPayments();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createPayment = async (req, res) => {
    try {
        const payment = await paymentModel.createPayment(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updatePayment = async (req, res) => {
    try {
        const payment = await paymentModel.updatePayment(req.params.id, req.body);
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deactivatePayment = async (req, res) => {
    try {
        await paymentModel.deactivatePayment(req.params.id);
        res.send('Payment deactivated');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllPayments,
    createPayment,
    updatePayment,
    deactivatePayment
};