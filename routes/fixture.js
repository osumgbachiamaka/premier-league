const express = require('express');
const router = express.Router();
const fixtureCtrl = require('../controllers/fixture')

router.post('/create/v1', fixtureCtrl.createFixture)
router.delete('/:id/delete/v1', fixtureCtrl.deleteFixture)
router.put('/:id/edit/v1', fixtureCtrl.editFixture)
router.get('/pending/v1', fixtureCtrl.pendingFixture)
router.get('/completed/v1', fixtureCtrl.completedFixture)
router.get('/:team', )
router.get('/v1', fixtureCtrl.viewFixture)
router.get('/:id/v1', fixtureCtrl.viewOneFixture)

module.exports = router;