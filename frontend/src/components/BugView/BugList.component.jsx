import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const BugList = ({ selectedBugID, setSelectedBugID, bugList }) => {
  const { id, role, name } = useContext(GlobalContext).user

  return (
    <div className="card bg-primary text-white">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Bug list</h5>
        <button className="btn btn-outline-light">+</button>
      </div>
      <ul className="list-group list-group-flush">
        {bugList.map((bug) => (
          <li
            key={bug.ID}
            className={
              'list-group-item user-select-none list-group-item-action' +
              (bug.ID === selectedBugID ? ' active' : '')
            }
            onClick={() => setSelectedBugID(bug.ID)}
          >
            <strong>#{bug.ID}</strong>
            {' ' + bug.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BugList
