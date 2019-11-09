const Fixture = require('../models/fixture')

exports.createFixture = (req, res) => {
    const fixture = new Fixture({
        teamOne : req.body.teamOne,
        teamTwo : req.body.teamTwo,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        week: req.body.week,
        point: req.body.point,
        goals: req.body.goals,
        gameState: req.body.gameState,
    });
    fixture.save()
    .then(() => {
        res.status(201).json({
            message: 'Fixture created successfully'
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error creating fixture'
        })
    })
};

exports.deleteFixture = (req, res) => {
    const id = req.params.id;
    Fixture.deleteOne({_id : id})
    .then(() => {
        res.status(201).json({
            message: 'Fixture deleted successfully'
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error deleting fixture'
        })
    })
};

exports.editFixture = (req, res) => {
    const id = req.params.id;
    const fixture = new Fixture({
        _id : id,
        teamName : req.body.teamName,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        week: req.body.week,
        point: req.body.point,
        goals: req.body.goals,
        gameState: req.body.gameState,
    });
    Fixture.findOne({_id : id})
    .then((found) => {
        if(found != null){
            
            Fixture.updateOne({_id : id}, fixture)
            .then(() => {
                res.status(201).json({
                    message: 'Fixture updated succesfully'
                })
            })
            .catch((err) => {
                res.status(401).json({
                    error: 'Error updating fixture'
                })
            })
        }
        else{
            res.status(401).json({
                fixture: 'not found'
            })
        }
    })
};

exports.viewFixture = (req, res) => {
    Fixture.find()
    .then((fixture) => {
        res.status(200).json(fixture)
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error fetching fixtures'
        })
    })
}

exports.viewOneFixture = (req, res) => {
    const id = req.params.id;
    Fixture.findOne({_id : id})
    .then((fixture) => {
        res.status(200).json(fixture)
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error fetching fixture'
        })
    })
}

exports.pendingFixture = (req, res) => {
    Fixture.findOne({gameState: 'pending'})
    .then((fixture) => {
        res.status(200).json(fixture)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({
            error: 'Error fetching pending fixture'
        })
    })
}

exports.completedFixture = (req, res) => {
    Fixture.findOne({gameState: 'completed'})
    .then((fixture) => {
        res.status(200).json(fixture)
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error fetching completed fixture'
        })
    })
}

exports.viewFixtureByTeam = (req, res) => {
    Fixture.findOne({gameState: 'completed'})
    .then((fixture) => {
        res.status(200).json(fixture)
    })
    .catch((err) => {
        res.status(400).json({
            error: 'Error fetching completed fixture'
        })
    })
}