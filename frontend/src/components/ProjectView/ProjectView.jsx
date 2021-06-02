import StaffList from './StaffList'
import PersonDetail from './PersonDetail'
import UserList from './UserList'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const ProjectView = () => {
  const { selectedPerson } = useContext(AppContext)
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-sm-3">
          <UserList />
        </div>
        <div className="col-sm-3">
          <StaffList />
        </div>
        <div className="col-sm-6">{selectedPerson && <PersonDetail />}</div>
      </div>
    </div>
  )
}

export default ProjectView
