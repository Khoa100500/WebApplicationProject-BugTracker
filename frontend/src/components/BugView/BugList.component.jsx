import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import BtnAdd from './BtnAdd.component'

const BugList = ({ selectedBugID, setSelectedBugID }) => {
  const {
    user: { role },
    bugList,
  } = useContext(GlobalContext)

  return (
    <div className="card bg-primary text-white">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Bug list</h5>
        {role === 'admin' && <BtnAdd />}
      </div>
      <ul className="list-group list-group-flush">
        {bugList.map((bug) => (
          <li
            key={bug.id}
            className={
              'list-group-item user-select-none list-group-item-action' +
              (bug.id === selectedBugID ? ' active' : '')
            }
            onClick={() => setSelectedBugID(bug.id)}
          >
            {bug.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BugList
