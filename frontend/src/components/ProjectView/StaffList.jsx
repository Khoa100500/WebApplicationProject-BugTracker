import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import AddStaff from './AddStaff'
import './StaffList.css'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

const StaffList = () => {
  const { staffList, selectedPerson, setSelectedPerson } =
    useContext(AppContext)
  const match = useRouteMatch()

  return (
    <div className="card bg-primary text-white">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Staff list</h5>
        <AddStaff />
      </div>
      <ul className="list-group list-group-flush">
        {staffList.map((staff) => (
          <Link
            key={staff.id}
            to={`${match.path}/${staff.id}`}
            style={{ textDecoration: 'none' }}
          >
            <li
              className={
                'list-group-item user-select-none list-group-item-action' +
                (staff.id === selectedPerson.id ? ' active' : '')
              }
              onClick={() => setSelectedPerson(staff)}
            >
              <strong>@{staff.username}</strong>
              {' ' + staff.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default StaffList
