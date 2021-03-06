const Admin = require('../models/admin-auth');
const Team = require('../models/teams')


exports.createTeam = (req, res) => {
    const team = new Team(req.body);
    team.save()
    .then(()=> {
        res.status(201).json({
            message: 'Team created Successfully'
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error creating team'
        })
    })
};

exports.deleteTeam = (req, res) => {
    const id = req.params.id;
    Team.deleteOne({_id: id})
    .then(() => {
        res.status(200).json({
            message: 'Team deleted successfully'
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error deleting team'
        })
    })
};

exports.editTeam = (req, res) => {
    const id = req.params.id;
    const team = new Team({
        _id : id,
        teamName : req.body.teamName,
        teamMembers: req.body.teamMembers,
        teamNumber: req.body.teamNumber,
        country: req.body.country,
        teamCaptain: req.body.teamCaptain,
    })
    Team.updateOne({_id : id}, team)
    .then(() => {
        res.status(201).json({
            message: 'Team updated successfully'
        })
    })
    .catch((err) => {
        res.status(401).json({
            error: 'Error updating team'
        })
    })
};

exports.getTeams = (req, res) => {
    Team.find()
    .then((team) => {
        res.status(200).json(team)
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error fetching teams'
        })
    })
};

exports.getOneTeam = (req, res) => {
    const id = req.params.id;
    Team.find({_id : id})
    .then((team) => {
        res.status(200).json(team)
    })
    .catch((err) => {
        res.status(401).json({
            error: 'Team not found'
        })
    })
}