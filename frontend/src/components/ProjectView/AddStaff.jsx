import { useContext, useRef } from 'react'
import { AppContext } from '../../contexts/AppContext'

const AddStaff = () => {
  const { addStaff } = useContext(AppContext)
  const nameRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = () => {
    addStaff(
      usernameRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    )
  }

  const resetInput = () => {
    usernameRef.current.value = ''
    passwordRef.current.value = ''
    nameRef.current.value = ''
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
                  ref={nameRef}
                  required
                />
                <label htmlFor="namestaff">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  ref={usernameRef}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  ref={passwordRef}
                  required
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
