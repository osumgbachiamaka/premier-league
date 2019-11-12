const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin')
const auth = require('../middlewares/admin-auth')

router.post('/create/v1', auth, adminCtrl.createTeam)
router.delete('/:id/delete/v1', auth, adminCtrl.deleteTeam)
router.put('/:id/edit/v1', auth, adminCtrl.editTeam)
router.get('/v1', adminCtrl.getTeams)
router.get('/:id/v1', adminCtrl.getOneTeam)

module.exports = router;