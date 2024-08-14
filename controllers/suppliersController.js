const supplierModel = require('../models/supplierModel');

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await supplierModel.getAllSuppliers();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createSupplier = async (req, res) => {
    try {
        const supplier = await supplierModel.createSupplier(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateSupplier = async (req, res) => {
    try {
        const supplier = await supplierModel.updateSupplier(req.params.id, req.body);
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deactivateSupplier = async (req, res) => {
    try {
        await supplierModel.deactivateSupplier(req.params.id);
        res.send('Supplier deactivated');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllSuppliers,
    createSupplier,
    updateSupplier,
    deactivateSupplier
};