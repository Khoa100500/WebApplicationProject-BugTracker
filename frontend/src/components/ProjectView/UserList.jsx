import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import AddUser from './AddUser'

import './UserList.css'

const UserList = () => {
  const { userList, setSelectedPerson, selectedPerson } = useContext(AppContext)

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
              (user.id === selectedPerson.id ? ' active' : '')
            }
            onClick={() => setSelectedPerson(user)}
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
