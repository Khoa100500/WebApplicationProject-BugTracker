import { killBug } from '../../services/bug.service'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const BtnKill = ({ bugID }) => {
  const { refreshBugList } = useContext(GlobalContext)
  return (
    <>
      <div class="modal fade text-dark" id="modalKillBug" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary text-light">
              <h5 class="modal-title">Kill bug</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              Do you really want to kill this innocent bug?
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
                onClick={(e) => {
                  e.preventDefault()
                  killBug(bugID).then(() => {
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
