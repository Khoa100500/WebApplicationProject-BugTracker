const peopleController = require('../controllers/people')
const express = require('express')
const router = express.Router()


router.get('/', async (request,response) => {
    try {
        let people = await peopleController.getPeople()
        response.json(people).status(200)
    } catch(e) {
        console.log(e)
        response.sendStatus(500)
    }
})

router.post('/', async (request,response) => {
    try {
        let people = await peopleController.createPerson(request.body)
        response.json(people).status(200)
    } catch(e) {
        console.log(e)
        response.sendStatus(500)
    }
})

router.patch('/:id', async (request,response) => {
    try {
        let update = await peopleController.updatePersonByID(request.params,request.body)
        response.send(update).status(200)
    } catch(e) {
        console.log(e)
        response.sendStatus(500)
    }
})

router.delete('/:id', async (request,response) => {
    try{
        let deletePersonByID = await peopleController.deletePersonByID(request.params)
        response.send(deletePersonByID).status(200)
    } catch(e) {
        console.log(e)
        response.sendStatus(500)
    }
})

/*
router.get('/', peopleController.getPeople)
router.post('/', peopleController.createPerson)
router.patch('/:id', peopleController.updatePersonByID)
router.delete('/:id', peopleController.deletePersonByID)
*/

module.exports = router