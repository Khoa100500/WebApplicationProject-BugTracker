import BugList from './BugList.component'
import BugDetail from './BugDetail.component'

import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const BugView = () => {
  const [selectedBugID, setSelectedBugID] = useState()
  const { refreshBugList, refreshPeopleList } = useContext(GlobalContext)

  useEffect(() => {
    refreshBugList()
    refreshPeopleList()
  }, [])

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-sm-4">
          <BugList
            selectedBugID={selectedBugID}
            setSelectedBugID={setSelectedBugID}
          />
        </div>
        <div className="col-sm-8">
          <BugDetail selectedBugID={selectedBugID} />
        </div>
      </div>
    </div>
  )
}

export default BugView
