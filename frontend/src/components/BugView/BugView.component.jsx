import BugList from './BugList.component'
import BugDetail from './BugDetail.component'
import {
  getBugList,
  getCustomerList,
  getStaffList,
} from '../../services/bug.service'
import { useState, useEffect } from 'react'
import './BugView.css'

const BugView = () => {
  const [selectedBugID, setSelectedBugID] = useState()
  const [bugList, setBugList] = useState([])
  const [customerList, setCustomerList] = useState([])
  const [staffList, setStaffList] = useState([])

  useEffect(() => {
    getBugList().then((bugs) => {
      setBugList(bugs)
    })
    getCustomerList().then((customers) => {
      setCustomerList(customers)
    })
    getStaffList().then((staffs) => {
      setStaffList(staffs)
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
            customerList={customerList}
            staffList={staffList}
          />
        </div>
      </div>
    </div>
  )
}

export default BugView
