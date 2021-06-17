import { useContext, useRef } from 'react'
import { AppContext } from '../../contexts/AppContext'

const EditPerson = () => {
  const { updatePerson, selectedPerson: person } = useContext(AppContext)
  const nameRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = () => {
    updatePerson(
      nameRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value
    )
  }

  const resetInput = () => {
    usernameRef.current.value = person.username
    passwordRef.current.value = ''
    nameRef.current.value = person.name
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
              <h5 className="modal-title">Edit {person.role}</h5>
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
                  ref={nameRef}
                  required
                />
                <label htmlFor="nameuseredit">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="usernameedit"
                  ref={usernameRef}
                  required
                />
                <label htmlFor="usernameedit">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="passwordedit"
                  ref={passwordRef}
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
