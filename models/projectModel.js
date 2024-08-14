const pool = require('../config/db');

const getAllProjects = async () => {
    const result = await pool.query('SELECT * FROM Projects');
    return result.rows;
};

const createProject = async (project) => {
    const { project_name, suppliers_id} = project;
    const result = await pool.query(
        'INSERT INTO Projects (project_name, suppliers_id) VALUES ($1, $2) RETURNING *',
        [project_name, suppliers_id]
    );
    return result.rows[0];
};

const updateProject = async (id, project) => {
    const { project_name, suppliers_id, description, category_id } = project;
    const result = await pool.query(
        'UPDATE Projects SET project_name = $1, supplier_id = $2 WHERE id = $3 RETURNING *',
        [project_name, suppliers_id, description, category_id, id]
    );
    return result.rows[0];
};

const deleteProject = async (id) => {
    await pool.query('DELETE FROM Projects WHERE id = $1', [id]);
};

module.exports = {
    getAllProjects,
    createProject,
    updateProject,
    deleteProject
};