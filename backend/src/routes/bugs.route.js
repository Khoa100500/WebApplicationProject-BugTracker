const controllers = require('../controllers/bugs')


module.exports = (app) => {

  app.get('/bugs', (req, res) => {
    const { staffID, userID } = req.query
    if (staffID) {
      res.json(controllers.getBugsByStaffID(staffID))
    } else if (userID) {
      res.json(controllers.getBugsByUserID(userID))
    } else {
      res.json(controllers.getBugs())
    }
  })

  app.post('/bugs', (req, res) => {
    controllers.createBug(req.body)
    res.end()
  })

  app.patch('/bugs/:bugID', (req, res) => {
    console.log("not implemented patch bugs yet")
    res.end()
  })

  app.delete('/bugs/:bugID', (req, res) => {
    controllers.deleteBugByID(req.params.bugID)
    res.end()
  })
}