import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { addBug } from '../../services/bug.service'

const BtnAdd = () => {
  const {
    user: { id },
    peopleList,
    refreshBugList,
  } = useContext(GlobalContext)
  const userList = []
  const staffList = []

  peopleList.forEach((person) => {
    if (person.id !== id) {
      if (person.role === 'staff') {
        staffList.push(person)
      }
      if (person.role === 'user') {
        userList.push(person)
      }
    }
  })

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [userID, setUserID] = useState(userList[0]?.id)
  const [staffID, setStaffID] = useState(staffList[0]?.id)

  const handleSubmit = (e) => {
    addBug(id, title, description, userID, staffID).then(() => {
      refreshBugList()
    })
  }

  const resetInput = () => {
    setTitle('')
    setDescription('')
    setUserID(userList[0]?.id)
    setStaffID(staffList[0]?.id)
  }

  return (
    <>
      <div class="modal fade text-dark " id="modalAddBug" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary text-light">
              <h5 class="modal-title">Add new bug</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
                <label for="title">Title</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="description"
                  style={{ height: '100px' }}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />
                <label for="description">Description</label>
              </div>
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  id="selectUser"
                  style={{ height: '65px' }}
                  value={userID}
                  onChange={(e) => {
                    setUserID(e.target.value)
                  }}
                >
                  {userList.map((user) => (
                    <option key={user.id} value={user.id}>
                      {`[user${user.id}] ${user.name}`}
                    </option>
                  ))}
                </select>
                <label for="selectUser">Select user</label>
              </div>
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  id="selectStaff"
                  style={{ height: '65px' }}
                  value={staffID}
                  onChange={(e) => {
                    setStaffID(e.target.value)
                  }}
                >
                  {staffList.map((staff) => (
                    <option key={staff.id} value={staff.id}>
                      {`[staff${staff.id}] ${staff.name}`}
                    </option>
                  ))}
                </select>
                <label for="selectStaff">Select staff</label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
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
