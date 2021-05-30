import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import AddUser from './AddUser'

import './UserList.css'

const UserList = ({ selectedPersonID, setSelectedPersonID }) => {
  const { peopleList } = useContext(GlobalContext)
  const userList = peopleList.filter((person) => person.role === 'user')
  return (
    <div className="card bg-primary text-white">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>User list</h5>
        <AddUser />
      </div>
      <ul className="list-group list-group-flush">
        {userList.map((user) => (
          <li
            key={user.id}
            className={
              'list-group-item user-select-none list-group-item-action' +
              (user.id === selectedPersonID ? ' active' : '')
            }
            onClick={() => setSelectedPersonID(user.id)}
          >
            <strong>@{user.username}</strong>
            {' ' + user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
