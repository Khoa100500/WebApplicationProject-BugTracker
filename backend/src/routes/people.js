const peopleController = require('../controllers/people')
const express = require('express')
const { permit } = require('../controllers/auth')
const router = express.Router()


router.get('/', permit(), peopleController.getPeople)

router.post('/', permit('admin'), peopleController.createPerson)

router.patch('/:id', permit('admin'), peopleController.updatePersonByID)

router.delete('/:id', permit('admin'), peopleController.deletePersonByID)


module.exports = router