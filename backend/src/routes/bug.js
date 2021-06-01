const bugController = require('../controllers/bug')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  const { role } = req.auth
  if (role === 'staff') {
    bugController.getBugsByStaffID(req, res)
  } else if (role === 'user') {
    bugController.getBugsByUserID(req, res)
  } else {
    bugController.getBugs(req, res)
  }
})

router.post('/', bugController.createBug)

router.patch('/:bugID', (req, res) => {
  const { staffID } = req.body
  if (staffID) {
    bugController.forwardBugByID(req, res)
  } else {
    bugController.updateBugByID(req, res)
  }
})

router.delete('/:bugID', bugController.deleteBugByID)

module.exports = router