import { useContext, useRef, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'

const BtnAdd = () => {
  const { userList, staffList, addBug } = useContext(AppContext)
  const titleRef = useRef()
  const descriptionRef = useRef()
  const [userID, setUserID] = useState(userList[0]?.id)
  const [staffID, setStaffID] = useState(staffList[0]?.id)

  const handleSubmit = () => {
    addBug(
      titleRef.current.value,
      descriptionRef.current.value,
      userID,
      staffID
    )
  }

  const resetInput = () => {
    titleRef.current.value = ''
    descriptionRef.current.value = ''
    setUserID(userList[0]?.id)
    setStaffID(staffList[0]?.id)
  }

  return (
    <>
      <div className="modal fade text-dark " id="modalAddBug" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-light">
              <h5 className="modal-title">Add new bug</h5>
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
                  id="title"
                  ref={titleRef}
                  required
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="description"
                  style={{ height: '100px' }}
                  ref={descriptionRef}
                  required
                />
                <label htmlFor="description">Description</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="selectUser"
                  style={{ height: '65px' }}
                  value={userID}
                  onChange={(e) => {
                    setUserID(e.target.value)
                  }}
                >
                  {userList.map((user) => (
                    <option key={user.id} value={user.id}>
                      {`[${user.username}] ${user.name}`}
                    </option>
                  ))}
                </select>
                <label htmlFor="selectUser">Select user</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="selectStaff"
                  style={{ height: '65px' }}
                  value={staffID}
                  onChange={(e) => {
                    setStaffID(e.target.value)
                  }}
                >
                  {staffList.map((staff) => (
                    <option key={staff.id} value={staff.id}>
                      {`[${staff.username}] ${staff.name}`}
                    </option>
                  ))}
                </select>
                <label htmlFor="selectStaff">Select staff</label>
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
        data-bs-target="#modalAddBug"
        onClick={resetInput}
      >
        +
      </button>
    </>
  )
}

export default BtnAdd
