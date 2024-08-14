const pool = require('../config/db');

const getAllMeetings = async () => {
    const result = await pool.query('SELECT * FROM Meetings');
    return result.rows;
};

const createMeeting = async (meeting) => {
    const { week_count, user_id, suppliers_id, description, is_payment, payment_amount } = meeting;
    const result = await pool.query(
        'INSERT INTO Meetings (week_count, user_id, suppliers_id, description, is_payment, payment_amount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [week_count, user_id, suppliers_id, description, is_payment, payment_amount]
    );
    return result.rows[0];
};

const updateMeeting = async (id, meeting) => {
    const { week_count, user_id, suppliers_id, description, is_payment, payment_amount } = meeting;
    const result = await pool.query(
        'UPDATE Meetings SET week_count = $1, user_id = $2, suppliers_id = $3, description = $4, is_payment = $5, payment_amount = $6 WHERE id = $7 RETURNING *',
        [week_count, user_id, suppliers_id, description, is_payment, payment_amount, id]
    );
    return result.rows[0];
    };
    
    const deleteMeeting = async (id) => {
    await pool.query('DELETE FROM Meetings WHERE id = $1', [id]);
    };
    
    module.exports = {
    getAllMeetings,
    createMeeting,
    updateMeeting,
    deleteMeeting
    };