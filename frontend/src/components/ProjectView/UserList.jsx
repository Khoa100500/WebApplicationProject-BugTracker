import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import AddUser from './AddUser'
import './UserList.css'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

const UserList = () => {
  const { userList, setSelectedPerson, selectedPerson } = useContext(AppContext)
  const match = useRouteMatch()

  return (
    <div className="card bg-primary text-white">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>User list</h5>
        <AddUser />
      </div>
      <ul className="list-group list-group-flush">
        {userList.map((user) => (
          <Link
            key={user.id}
            to={`${match.path}/${user.id}`}
            style={{ textDecoration: 'none' }}
          >
            <li
              className={
                'list-group-item user-select-none list-group-item-action' +
                (user.id === selectedPerson.id ? ' active' : '')
              }
              onClick={() => setSelectedPerson(user)}
            >
              <strong>@{user.username}</strong>
              {' ' + user.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default UserList
