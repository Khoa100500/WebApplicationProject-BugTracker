import BugList from './BugList.component'
import BugDetail from './BugDetail.component'
import { getBugList } from '../../services/bug.service'
import { getPeopleList } from '../../services/people.service'
import { useState, useEffect } from 'react'
import './BugView.css'

const BugView = () => {
  const [selectedBugID, setSelectedBugID] = useState()
  const [bugList, setBugList] = useState([])
  const [peopleList, setPeopleList] = useState([])
  useEffect(() => {
    getBugList().then((bugs) => {
      setBugList(bugs)
    })
    getPeopleList().then((people) => {
      setPeopleList(people)
    })
  }, [])

  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-sm-4">
          <BugList
            selectedBugID={selectedBugID}
            setSelectedBugID={setSelectedBugID}
            bugList={bugList}
          />
        </div>
        <div className="col-sm-8">
          <BugDetail
            selectedBugID={selectedBugID}
            bugList={bugList}
            peopleList={peopleList}
          />
        </div>
      </div>
    </div>
  )
}

export default BugView
