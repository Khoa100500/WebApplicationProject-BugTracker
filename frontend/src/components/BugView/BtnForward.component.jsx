import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { forwardBug } from '../../services/bug.service'

const BtnForward = ({ bug }) => {
  const {
    user: { id },
    peopleList,
    refreshBugList,
  } = useContext(GlobalContext)
  const staffList = []

  peopleList.forEach((person) => {
    if (person.id !== bug?.staffID) {
      if (person.role === 'staff') {
        staffList.push(person)
      }
    }
  })

  const [staffID, setStaffID] = useState(staffList[0]?.id)

  const handleSubmit = (e) => {
    forwardBug(bug.id, id, staffID, bug.updates).then(() => {
      refreshBugList()
    })
  }

  return (
    <>
      <div class="modal fade text-dark" id="modalForwardBug" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary text-light">
              <h5 class="modal-title">Forward bug</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
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
                <label for="selectStaff">Forward to staff</label>
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
                Forward
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#modalForwardBug"
        onClick={() => {
          setStaffID(staffList[0].id)
        }}
      >
        Forward
      </button>
    </>
  )
}

export default BtnForward
