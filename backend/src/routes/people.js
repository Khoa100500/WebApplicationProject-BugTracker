const peopleController = require('../controllers/people')
const express = require('express')
const router = express.Router()


router.get('/', peopleController.getPeople)

router.post('/', peopleController.createPerson)

router.patch('/:id', peopleController.updatePersonByID)

router.delete('/:id', peopleController.deletePersonByID)

module.exports = router