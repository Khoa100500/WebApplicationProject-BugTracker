import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import AddStaff from './AddStaff.component'

const StaffList = ({ selectedPersonID, setSelectedPersonID }) => {
  const { peopleList } = useContext(GlobalContext)
  const staffList = peopleList.filter((person) => person.role === 'staff')
  return (
    <div className="card bg-primary text-white">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Staff list</h5>
        <AddStaff />
      </div>
      <ul className="list-group list-group-flush">
        {staffList.map((user) => (
          <li
            key={user.id}
            className={
              'list-group-item user-select-none list-group-item-action' +
              (user.id === selectedPersonID ? ' active' : '')
            }
            onClick={() => setSelectedPersonID(user.id)}
          >
            <strong>#{user.id}</strong>
            {' ' + user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StaffList
