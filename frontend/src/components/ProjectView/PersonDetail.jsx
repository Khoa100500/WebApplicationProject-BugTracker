import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import EditPerson from './EditPerson'
import DeletePerson from './DeletePerson'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'



const PersonDetail = () => {
  const { peopleList, bugList, selectedPerson: person } = useContext(AppContext)
  const _bugList = bugList.filter(
    (bug) => bug.staffID === person.id || bug.userID === person.id
  )
  const match = useRouteMatch()

  return (
    <div className="card bg-primary text-light">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Detail {person.role}</h5>
        <div className="btn-group ">
          {person && <EditPerson />}
          {person && <DeletePerson />}
        </div>
      </div>
      <div className="card-body bg-white text-dark">
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="titledetail">
            <strong>Name</strong>
          </label>
          <div className="col-10">
            <div className="input-group">
              <span className="input-group-text">@{person.username}</span>
              <input
                readOnly
                type="text"
                id="userdetail"
                className="form-control"
                value={person.name}
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {_bugList.map(({ id, userID, staffID, title }) => (
          <li key={id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <Link to={`/bugview/${id}`} style={{ textDecoration: 'none' }}>
                {title}
              </Link>
              <div className="text-primary">
                <em>{'@'}</em>
                <Link
                  to={`${match.path}/${
                    person.role === 'user' ? staffID : userID
                  }`}
                  style={{ textDecoration: 'none' }}
                >
                  {person.role === 'user'
                    ? peopleList.find((person) => person.id === staffID)
                        .username
                    : peopleList.find((person) => person.id === userID)
                        .username}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonDetail
