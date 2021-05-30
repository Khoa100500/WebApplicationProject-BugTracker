import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { forwardBug } from '../../services/bug'

const BtnForward = ({ bug }) => {
  const {
    user: { id },
    peopleList,
    refreshBugList,
  } = useContext(GlobalContext)

  const staffList = peopleList.filter(
    (staff) => staff.id !== bug?.staffID && staff.role === 'staff'
  )

  const [staffID, setStaffID] = useState(staffList[0]?.id)

  const handleSubmit = () => {
    forwardBug(
      bug.id,
      id,
      staffID,
      bug.updates,
      staffList.filter((staff) => staff.id === staffID)[0].username
    ).then(() => {
      refreshBugList()
    })
  }

  return (
    <>
      <div className="modal fade text-dark" id="modalForwardBug" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-light">
              <h5 className="modal-title">Forward bug</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
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
                <label htmlFor="selectStaff">Forward to staff</label>
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
