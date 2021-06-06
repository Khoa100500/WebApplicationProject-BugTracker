import BugList from './BugList'
import BugDetail from './BugDetail'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { useHistory, useRouteMatch } from 'react-router'

const BugView = () => {
  const { selectedBug, setSelectedBugByID } = useContext(AppContext)
  const id = useRouteMatch('/bugview/:id')?.params.id
  const history = useHistory()

  useEffect(() => {
    if (id) {
      setSelectedBugByID(id)
    } else {
      if (selectedBug) {
        history.push(`/bugview/${selectedBug.id}`)
      }
    }
  }, [id])

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
