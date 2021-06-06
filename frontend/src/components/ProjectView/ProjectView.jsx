import StaffList from './StaffList'
import PersonDetail from './PersonDetail'
import UserList from './UserList'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { useHistory, useRouteMatch } from 'react-router'

const ProjectView = () => {
  const { selectedPerson, setSelectedPersonByID } = useContext(AppContext)
  const id = useRouteMatch('/projectview/:id')?.params.id
  const history = useHistory()

  useEffect(() => {
    if (id) {
      setSelectedPersonByID(id)
    } else {
      if (selectedPerson) {
        history.push(`/projectview/${selectedPerson.id}`)
      }
    }
  }, [id])

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
