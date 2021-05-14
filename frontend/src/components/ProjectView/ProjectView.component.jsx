import { useState } from 'react'

import StaffList from './StaffList.component'
import PersonDetail from './PersonDetail.component'
import UserList from './UserList.component'

const ProjectView = () => {
  const [selectedPersonID, setSelectedPersonID] = useState()

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-sm-3">
          <UserList
            selectedPersonID={selectedPersonID}
            setSelectedPersonID={setSelectedPersonID}
          />
        </div>
        <div className="col-sm-3">
          <StaffList
            selectedPersonID={selectedPersonID}
            setSelectedPersonID={setSelectedPersonID}
          />
        </div>
        <div className="col-sm-6">
          <PersonDetail selectedPersonID={selectedPersonID} />
        </div>
      </div>
    </div>
  )
}

export default ProjectView
