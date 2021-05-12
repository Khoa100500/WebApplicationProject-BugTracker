import BugList from './BugList.component'
import BugDetail from './BugDetail.component'
import { getBugList } from '../../services/bug.service'
import { useState, useEffect } from 'react'

const BugView = () => {
  const [selectedBugID, setSelectedBugID] = useState(2)
  const [bugList, setBugList] = useState([])

  // fetch bugs on component init
  useEffect(() => {
    getBugList().then((bugs) => {
      setBugList(bugs)
    })
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <BugList
            selectedBugID={selectedBugID}
            setSelectedBugID={setSelectedBugID}
            bugList={bugList}
          />
        </div>
        <div className="col-sm-8">
          <BugDetail selectedBugID={selectedBugID} bugList={bugList} />
        </div>
      </div>
    </div>
  )
}

export default BugView
