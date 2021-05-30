import { useState, useContext } from 'react'
import { updatePerson } from '../../services/people'
import { GlobalContext } from '../../context/GlobalContext'

const EditPerson = ({ person }) => {
  const { refreshPeopleList } = useContext(GlobalContext)
  const [name, setName] = useState(person?.name)
  const [username, setUsername] = useState(person?.username)
  const [password, setPassword] = useState(person?.password)

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePerson(person.id, name, person.role, username, password).then(() => {
      refreshPeopleList()
    })
  }

  const resetInput = () => {
    setName(person?.name)
    setUsername(person?.username)
    setPassword(person?.password)
  }

  return (
    <>
      <button
        className="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#modalEditPerson"
        onClick={resetInput}
      >
        Edit
      </button>
      <div className="modal fade text-dark " id="modalEditPerson" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-light">
              <h5 className="modal-title">Edit {person?.role}</h5>
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
                  id="nameuseredit"
                  value={name}
                  placeholder={person?.name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
                <label htmlFor="nameuseredit">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="usernameedit"
                  value={username}
                  placeholder={person?.username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
                <label htmlFor="usernameedit">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="passwordedit"
                  value={password}
                  placeholder={person?.password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <label htmlFor="passwordedit">Password</label>
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
    </>
  )
}

export default EditPerson
