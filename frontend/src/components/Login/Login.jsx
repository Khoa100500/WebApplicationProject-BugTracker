import { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    login(usernameRef.current.value, passwordRef.current.value)
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        passwordRef.current.value = ''
        alert(err.response.data.message)
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
              ref={usernameRef}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              ref={passwordRef}
              required
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
