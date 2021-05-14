import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

import ProjectDetail from './ProjectDetail.component'
import StaffList from './StaffList.component'
import PersonDetail from './PersonDetail.component'
import UserList from './UserList.component'

const ProjectView = () => {
  const {
    user: { id },
    peopleList,
    refreshBugList,
  } = useContext(GlobalContext)

  const [selectedPerson, setSelectedPerson] = useState()

  const setSelectedID = (id) => {}

  return (
    <div className="container pt-3">
      <div className="row row-cols-3">
        <div className="col">
          <ProjectDetail />
        </div>
        <div className="col">
          <StaffList
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
          />
        </div>
        <div className="col-6">
          <PersonDetail />
        </div>
        <div className="col">
          <UserList
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectView
