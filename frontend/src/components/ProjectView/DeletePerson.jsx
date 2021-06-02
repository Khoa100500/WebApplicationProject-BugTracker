import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const DeletePerson = () => {
  const { deletePerson, selectedPerson: person } = useContext(AppContext)

  const handleSubmit = () => {
    deletePerson()
  }

  return (
    <>
      <div
        className="modal fade text-dark"
        id="modalDeletePerson"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-light">
              <h5 className="modal-title">Remove this {person.role}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              Do you really want to remove {person.role} {person.name}?
              <br /> Innocent bugs involved with this {person.role} will be
              killed!
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
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#modalDeletePerson"
      >
        Remove
      </button>
    </>
  )
}

export default DeletePerson
