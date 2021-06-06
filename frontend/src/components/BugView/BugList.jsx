import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import BtnAdd from './BtnAdd'
import { useAuth } from '../../contexts/AuthContext'
import './BugList.css'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

const BugList = () => {
  const { bugList, selectedBug, setSelectedBug } = useContext(AppContext)
  const {
    user: { role },
  } = useAuth()
  const match = useRouteMatch()

  return (
    <div className="card bg-primary text-white">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Bug list</h5>
        {role === 'admin' && <BtnAdd />}
      </div>
      <ul className="list-group list-group-flush">
        {bugList.map((bug) => (
          <Link
            key={bug.id}
            to={`${match.path}/${bug.id}`}
            style={{ textDecoration: 'none' }}
          >
            <li
              className={
                'list-group-item user-select-none list-group-item-action' +
                (bug.id === selectedBug.id ? ' active' : '')
              }
              onClick={() => setSelectedBug(bug)}
            >
              {bug.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default BugList
