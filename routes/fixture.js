const express = require('express');
const router = express.Router();
const fixtureCtrl = require('../controllers/fixture')
const user_auth = require('../middlewares/user-auth')
const admin_auth = require('../middlewares/admin-auth')

router.post('/create/v1', admin_auth, fixtureCtrl.createFixture)
router.delete('/:id/delete/v1', admin_auth, fixtureCtrl.deleteFixture)
router.put('/:id/edit/v1', admin_auth, fixtureCtrl.editFixture)
router.get('/pending/v1', fixtureCtrl.pendingFixture)
router.get('/completed/v1', fixtureCtrl.completedFixture)
router.get('/:id/v1', fixtureCtrl.viewOneFixture)
router.get('/:team/v1', fixtureCtrl.viewFixtureByTeam)
router.get('/v1', fixtureCtrl.viewFixture)

module.exports = router;