const User = require('../models/user-auth')

exports.userCreate = async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            error: "Error creating user"
        })
    }
}

exports.userLogin = async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body;
        console.log(req.body)
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}
