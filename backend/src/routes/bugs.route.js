const controllers = require('../controllers/bugs')


module.exports = (app) => {

  app.get('/bugs', (req, res) => {
    const { staffID, userID } = req.query
    if (staffID) {
      controllers.getBugsByStaffID(staffID, res)
    } else if (userID) {
      controllers.getBugsByUserID(userID, res)
    } else {
      controllers.getBugs(res)
    }
  })

  app.post('/bugs', (req, res) => {
    controllers.createBug(req.body, res)
  })

  app.patch('/bugs/:bugID', (req, res) => {
    controllers.updateBugByID(req.params.bugID, req.body, res)
  })

  app.delete('/bugs/:bugID', (req, res) => {
    controllers.deleteBugByID(req.params.bugID, res)
  })
}