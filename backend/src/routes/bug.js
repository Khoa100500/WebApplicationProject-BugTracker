const bugController = require('../controllers/bug')
const express = require('express')
const { permit } = require('../controllers/auth')
const router = express.Router()


router.get('/', permit(), async (req, res) => {
  const { role } = req.locals.user
  if (role === 'staff') {
    await bugController.getBugsByStaffID(req, res)
  } else if (role === 'user') {
    await bugController.getBugsByUserID(req, res)
  } else {
    await bugController.getBugs(req, res)
  }
})

router.post('/', permit('admin'), bugController.createBug)

router.patch('/:bugID', permit('admin', 'staff'), async (req, res) => {
  const { staffID } = req.body
  if (staffID) {
    await bugController.forwardBugByID(req, res)
  } else {
    await bugController.updateBugByID(req, res)
  }
})

router.delete('/:bugID', permit('admin', 'user'), bugController.deleteBugByID)


module.exports = router