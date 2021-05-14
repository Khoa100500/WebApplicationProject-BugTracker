import { useState, useContext } from 'react'
import { addStaff } from '../../services/people.service'
import { GlobalContext } from '../../context/GlobalContext'

const AddStaff = () => {
  const { refreshPeopleList } = useContext(GlobalContext)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    addStaff(username, password, name).then(() => {
      refreshPeopleList()
    })
  }

  const resetInput = () => {
    setName('')
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <div className="modal fade text-dark " id="modalAddStaff" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-light">
              <h5 className="modal-title">Add new staff</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="namestaff"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
                <label htmlFor="namestaff">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#modalAddStaff"
        onClick={resetInput}
      >
        +
      </button>
    </>
  )
}

export default AddStaff
