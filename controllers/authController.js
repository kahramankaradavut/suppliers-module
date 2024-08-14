const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Şifreyi doğrulama
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // JWT Token oluşturma
    const token = jwt.sign({ id: user.id, is_admin: user.is_admin }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    res.json({ token });
};

const logout = (req, res) => {
    // JWT ile logout işlemi istemcide yapılır, bu yüzden backend'de bir işlem yapılmaz
    res.json({ message: 'Logout successful' });
};

module.exports = {
    login,
    logout,
};