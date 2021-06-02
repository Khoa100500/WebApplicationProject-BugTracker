import BugList from './BugList'
import BugDetail from './BugDetail'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const BugView = () => {
  const { selectedBug } = useContext(AppContext)

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-sm-4">
          <BugList />
        </div>
        <div className="col-sm-8">{selectedBug && <BugDetail />}</div>
      </div>
    </div>
  )
}

export default BugView
