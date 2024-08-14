const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(express.json());

app.use('/auth', authRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/categories', categoryRoutes);
app.use('/meetings', meetingRoutes);
app.use('/projects', projectRoutes);
app.use('/users', userRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});