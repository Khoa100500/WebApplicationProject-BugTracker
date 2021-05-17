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
    const { updates, staffID } = req.body
    const bugID = req.params.bugID
    if (staffID) {
      controllers.forwardBugByID(bugID, staffID, res)
    } else {
      controllers.updateBugByID(bugID, updates, res)
    }
  })

  app.delete('/bugs/:bugID', (req, res) => {
    controllers.deleteBugByID(req.params.bugID, res)
  })
}