import { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import config from '../../config'
import { GlobalContext } from '../../context/GlobalContext'
import { login } from '../../services/auth'

const Login = () => {
  const { user, setUser, refreshBugList, refreshPeopleList } =
    useContext(GlobalContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const redirectToBugview = () => {
    history.push('/bugview')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    login(username, password)
      .then((res) => {
        setLoading(false)
        setUser(res)
        redirectToBugview()
      })
      .catch((err) => {
        setLoading(false)
        setUsername('')
        setPassword('')
        alert(`Failed to login: ${err}`)
      })
  }

  return (
    <div className="container pt-5">
      <form className="card border-primary mx-auto" style={{ width: '350px' }}>
        <h3 className="card-header text-center text-white bg-primary">Login</h3>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Submit{' '}
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
