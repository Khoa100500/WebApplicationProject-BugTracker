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
      <div className="modal fade text-dark" id="modalUpdateBug" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-light">
              <h5 className="modal-title">Update bug</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="content"
                  style={{ height: '100px' }}
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value)
                  }}
                />
                <label htmlFor="content">Update content</label>
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

export default BtnUpdate
