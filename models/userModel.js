const pool = require('../config/db');
const bcrypt = require('bcrypt');

const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM Users WHERE is_active = true');
    return result.rows;
};

const createUser = async (user) => {
    const { username, password, email, is_admin } = user;

    const emailCheck = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
    if (emailCheck.rows.length > 0) {
        throw new Error('Email already in use');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
        'INSERT INTO Users (username, password, email, is_admin) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, hashedPassword, email, is_admin]
    );
    return result.rows[0];
};

const updateUser = async (id, user) => {
    const { username, password, email, is_admin } = user;
    const result = await pool.query(
        'UPDATE Users SET username = $1, password = $2, email = $3, is_admin = $4 WHERE id = $5 RETURNING *',
        [username, password, email, is_admin, id]
    );
    return result.rows[0];
};

const deactivateUser = async (id) => {
    await pool.query('UPDATE Users SET is_active = false WHERE id = $1', [id]);
};

const getUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM Users WHERE username = $1', [username]);
    return result.rows[0];
};


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deactivateUser,
    getUserByUsername
};