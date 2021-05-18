import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

import EditPerson from './EditPerson.component'
import DeletePerson from './DeletePerson.component'

const PersonDetail = ({ selectedPersonID }) => {
  const { peopleList, bugList } = useContext(GlobalContext)

  const person = peopleList.find((person) => person.id === selectedPersonID)
  const _bugList = bugList.filter(
    (bug) => bug.staffID === selectedPersonID || bug.userID === selectedPersonID
  )

  return (
    <div className="card bg-primary text-light">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Detail {person?.role}</h5>
        <div className="btn-group ">
          {person && <EditPerson person={person} />}
          {person && <DeletePerson person={person} bugList={_bugList} />}
        </div>
      </div>
      <div className="card-body bg-white text-dark">
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="titledetail">
            <strong>Name</strong>
          </label>
          <div className="col-10">
            <div className="input-group">
              <span className="input-group-text">@{person?.username}</span>
              <input
                readOnly
                type="text"
                id="userdetail"
                className="form-control"
                value={person?.name}
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {_bugList?.map(({ id, userID, staffID, title }) => (
          <li key={id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>{title}</div>
              <div className="text-primary">
                <em>{'@'}</em>
                {person?.role === 'user'
                  ? peopleList.find((person) => person?.id === staffID)
                      ?.username
                  : peopleList.find((person) => person?.id === userID)
                      ?.username}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonDetail
