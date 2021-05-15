// mport { useContext } from 'react'
// import { GlobalContext } from '../../context/GlobalContext'

// .....

// const {setUser} = useContext(GlobalContext)

// .....

// setUser({
//   id: '3', // ID string: cái này bên backend gửi về
//   role: 'staff', // ['admin', 'staff', 'user']
//   name: 'The Master', // Full name
//   username: 'master' // Username để hiện thị trong Bug Detail
// })

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { login, getAuthHeader } from './auth'
import { GlobalContext } from '../../context/GlobalContext'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const redirectToCourses = () => {
    history.push('/courses')
  }

  useEffect(() => {
    const header = getAuthHeader()
    if (header['x-access-token']) {
      redirectToCourses()
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    login(username, password)
      .then((res) => {
        console.log('Welcome', res.studentName)
        setLoading(false)
        redirectToCourses()
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setUsername('')
        setPassword('')
        alert('Failed to login')
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
