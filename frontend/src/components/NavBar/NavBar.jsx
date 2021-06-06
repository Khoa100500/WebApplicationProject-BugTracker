import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const NavBar = () => {
  const {
    user: { name, role },
    logout,
  } = useAuth()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Group 5 [BugTracker]
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {['admin', 'staff', 'user'].includes(role) && (
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/bugview"
              >
                Manage Bugs
              </NavLink>
            </li>
          )}
          {['admin'].includes(role) && (
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/projectview"
              >
                Manage Project
              </NavLink>
            </li>
          )}
        </ul>
        <div>
          <span className="navbar-text">{`Logged in as`}</span>
          <span className="text-light m-2">{name.toUpperCase()}</span>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
