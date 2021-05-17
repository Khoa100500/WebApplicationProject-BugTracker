const controllers = require('../controllers/people')


module.exports = (app) => {

  app.get('/people', (req, res) => {
    controllers.getPeople(res)
  })

  app.post('/people', (req, res) => {
    controllers.createPerson(req.body, res)
  })

  app.patch('/people/:id', (req, res) => {
    controllers.updatePersonByID(req.params.id, req.body, res)
  })

  app.delete('/people/:id', (req, res) => {
    controllers.deletePersonByID(req.params.id, res)
  })
}