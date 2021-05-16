const controllers = require('../controllers/people')


module.exports = (app) => {

  app.get('/people', (req, res) => {
    res.json(controllers.getPeople())
  })

  app.post('/people', (req, res) => {
    controllers.createPerson(req.body)
    res.end()
  })

  app.patch('/people/:id', (req, res) => {
    controllers.updatePersonByID(req.params.id)
    res.end()
  })

  app.delete('/people/:id', (req, res) => {
    controllers.deletePersonByID(req.params.id)
    res.end()
  })
}