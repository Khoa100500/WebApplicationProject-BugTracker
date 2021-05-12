import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const BugList = ({ selectedBugID, setSelectedBugID, bugList }) => {
  const { id, role, name } = useContext(GlobalContext).user

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>
          @<strong>{role + id + ': ' + name}</strong>
        </h5>
        <button className="btn btn-outline-secondary">+</button>
      </div>
      <ul className="list-group list-group-flush">
        {bugList.map((bug) => (
          <li
            key={bug.id}
            className={
              'list-group-item user-select-none' +
              (bug.id === selectedBugID ? ' active' : '')
            }
            onClick={() => setSelectedBugID(bug.id)}
          >
            <strong>#{bug.id}</strong>
            {' ' + bug.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BugList
