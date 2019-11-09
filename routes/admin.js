const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin')

// router.post('/admin/signup/v1', adminCtrl.adminSignup)

// router.get('/admin/login/v1', adminCtrl.adminLogin)

router.post('/create/v1', adminCtrl.createTeam)
router.delete('/:id/delete/v1', adminCtrl.deleteTeam)
router.put('/:id/edit/v1', adminCtrl.editTeam)
router.get('/v1', adminCtrl.getTeams)
router.get('/:id/v1', adminCtrl.getOneTeam)

module.exports = router;