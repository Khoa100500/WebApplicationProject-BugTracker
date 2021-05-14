import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

import EditPerson from './EditPerson.component'
import DeletePerson from './DeletePerson.component'

const PersonDetail = ({ selectedPersonID }) => {
  const {
    user: { role },
    peopleList,
    bugList,
  } = useContext(GlobalContext)

  const person = peopleList.find((person) => person.id === selectedPersonID)
  const _bugList = bugList.filter(
    (bug) => bug.staffID === selectedPersonID || bug.userID === selectedPersonID
  )

  return (
    <div className="card bg-primary text-light">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Detail {person?.role}</h5>
        <div className="btn-group ">
          <EditPerson />
          <DeletePerson />
        </div>
      </div>
      <div className="card-body bg-white text-dark">
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="titledetail">
            <strong>Name</strong>
          </label>
          <div className="col-10">
            <input
              readOnly
              type="text"
              id="titledetail"
              className="form-control"
              value={person?.name}
            />
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {_bugList?.map(({ id, userID, staffID, title }) => (
          <li key={id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <strong>#{id}</strong>
                {' ' + title}
              </div>
              <div className="text-primary">
                <em>{'@'}</em>
                {person.role === 'user'
                  ? peopleList.find((person) => person.id === staffID).username
                  : peopleList.find((person) => person.id === userID).username}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonDetail
