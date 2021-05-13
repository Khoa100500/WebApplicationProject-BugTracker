import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { username, role } = useContext(GlobalContext).user

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Group 5 [BugTracker]
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {['admin', 'staff', 'user'].includes(role) && (
            <li className="nav-item">
              <Link className="nav-link" to="/bugview">
                BugView
              </Link>
            </li>
          )}
          {['admin'].includes(role) && (
            <li className="nav-item">
              <Link className="nav-link" to="/staffview">
                StaffView
              </Link>
            </li>
          )}
          {['admin'].includes(role) && (
            <li className="nav-item">
              <Link className="nav-link" to="/projectview">
                ProjectView
              </Link>
            </li>
          )}
        </ul>
        <div>
          <span className="navbar-text">{`Logged in as`}</span>
          <span className="text-light m-2">{username.toUpperCase()}</span>
          <button className="btn btn-outline-light">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
