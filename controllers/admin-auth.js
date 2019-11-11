const Admin = require('../models/admin-auth')

exports.adminCreate = async (req, res) => {
    // Create a new admin
    try {
        const admin = new Admin(req.body)
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(201).json({ admin, token })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            error: "Error creating admin"
        })
    }
}

exports.adminLogin = async(req, res) => {
    //Login a registered admin
    try {
        const { email, password } = req.body;
        console.log(req.body)
        const admin = await Admin.findByCredentials(email, password)
        if (!admin) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await admin.generateAuthToken()
        res.send({ admin, token })
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}
