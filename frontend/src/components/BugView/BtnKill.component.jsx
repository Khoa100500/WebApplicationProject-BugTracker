import { killBug } from '../../services/bug.service'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const BtnKill = ({ bug }) => {
  const { refreshBugList } = useContext(GlobalContext)
  return (
    <>
      <div className="modal fade text-dark" id="modalKillBug" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-light">
              <h5 className="modal-title">Kill bug</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              Do you really want to kill this innocent bug?
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
                onClick={(e) => {
                  e.preventDefault()
                  killBug(bug.id).then(() => {
                    refreshBugList()
                  })
                }}
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
        data-bs-target="#modalKillBug"
      >
        Kill
      </button>
    </>
  )
}

export default BtnKill
