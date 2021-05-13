import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { updateBug } from '../../services/bug.service'

const BtnUpdate = ({ bug }) => {
  const {
    user: { id },
    refreshBugList,
  } = useContext(GlobalContext)

  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    updateBug(bug.id, id, content, bug.updates).then(() => {
      refreshBugList()
    })
  }

  return (
    <>
      <button
        className="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#modalUpdateBug"
        onClick={() => {
          setContent('')
        }}
      >
        Update
      </button>
      <div class="modal fade text-dark" id="modalUpdateBug" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary text-light">
              <h5 class="modal-title">Update bug</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="content"
                  style={{ height: '100px' }}
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value)
                  }}
                />
                <label for="content">Update content</label>
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
    </>
  )
}

export default BtnUpdate
