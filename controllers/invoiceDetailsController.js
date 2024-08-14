const invoiceDetailModel = require('../models/invoiceDetailModel');

const getAllInvoiceDetails = async (req, res) => {
    try {
        const invoiceDetails = await invoiceDetailModel.getAllInvoiceDetails();
        res.json(invoiceDetails);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createInvoiceDetail = async (req, res) => {
    try {
        const invoiceDetail = await invoiceDetailModel.createInvoiceDetail(req.body);
        res.status(201).json(invoiceDetail);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateInvoiceDetail = async (req, res) => {
    try {
        const invoiceDetail = await invoiceDetailModel.updateInvoiceDetail(req.params.id, req.body);
        res.json(invoiceDetail);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deactivateInvoiceDetail = async (req, res) => {
    try {
        await invoiceDetailModel.deactivateInvoiceDetail(req.params.id);
        res.send('Invoice detail deactivated');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllInvoiceDetails,
    createInvoiceDetail,
    updateInvoiceDetail,
    deactivateInvoiceDetail
};