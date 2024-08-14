const meetingModel = require('../models/meetingModel');

const getAllMeetings = async (req, res) => {
    try {
        const meetings = await meetingModel.getAllMeetings();
        res.json(meetings);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createMeeting = async (req, res) => {
    try {
        const meeting = await meetingModel.createMeeting(req.body);
        res.status(201).json(meeting);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateMeeting = async (req, res) => {
    try {
        const meeting = await meetingModel.updateMeeting(req.params.id, req.body);
        res.json(meeting);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteMeeting = async (req, res) => {
    try {
        await meetingModel.deleteMeeting(req.params.id);
        res.send('Meeting deleted');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllMeetings,
    createMeeting,
    updateMeeting,
    deleteMeeting
};