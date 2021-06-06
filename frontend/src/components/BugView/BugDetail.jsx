import BtnUpdate from './BtnUpdate'
import BtnForward from './BtnForward'
import BtnKill from './BtnKill'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

const formatTime = (sqlTime) => {
  return sqlTime.slice(0, 19).replace('T', ' ')
}

const PersonLink = ({ person, defaultValue = '[deleted]' }) => {
  const {
    user: { role },
  } = useAuth()
  if (!person) {
    return defaultValue
  }
  if (role === 'admin') {
    return (
      <Link to={`/projectview/${person.id}`} style={{ textDecoration: 'none' }}>
        @{person.username}
      </Link>
    )
  } else {
    return '@' + person.username
  }
}

const ContentParser = ({ content }) => {
  const { peopleList } = useContext(AppContext)
  const words = content.split(' ')
  const last = words.pop()
  if (last.startsWith('@')) {
    const username = last.substr(1)
    return (
      <>
        <span>{words.join(' ') + ' '}</span>
        <PersonLink
          person={peopleList.find((person) => person.username === username)}
          defaultValue={'@' + username}
        />
      </>
    )
  } else {
    return words.concat(last).join(' ')
  }
}

const BugDetail = () => {
  const { peopleList, selectedBug: bug } = useContext(AppContext)
  const {
    user: { role },
  } = useAuth()
  const user = peopleList.find((user) => user.id === bug.userID)
  const staff = peopleList.find((user) => user.id === bug.staffID)

  return (
    <div className="card bg-primary text-light">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>Bug detail</h5>
        <div className="btn-group ">
          {['admin', 'staff'].includes(role) && <BtnUpdate />}
          {['admin', 'staff'].includes(role) && <BtnForward />}
          {['admin', 'user'].includes(role) && <BtnKill />}
        </div>
      </div>
      <div className="card-body bg-white text-dark">
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="titledetail">
            <strong>Title</strong>
          </label>
          <div className="col-10">
            <input
              readOnly
              type="text"
              id="titledetail"
              className="form-control"
              value={bug.title}
            />
          </div>
        </div>
        <div className="row mb-2 align-items-start">
          <label className="col-2" htmlFor="describe"></label>
          <div className="col-10">
            <textarea
              readOnly
              type="text"
              id="describe"
              className="form-control"
              style={{ height: '100px' }}
              value={bug.description}
            />
          </div>
        </div>
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="userdetail">
            <strong>User</strong>
          </label>
          <div className="col-10">
            <div className="input-group">
              <span className="input-group-text">
                <PersonLink person={user} />
              </span>
              <input
                readOnly
                type="text"
                id="userdetail"
                className="form-control"
                value={user.name}
              />
            </div>
          </div>
        </div>
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="staffdetail">
            <strong>Staff</strong>
          </label>
          <div className="col-10">
            <div className="input-group">
              <span className="input-group-text">
                <PersonLink person={staff} />
              </span>
              <input
                readOnly
                type="text"
                id="staffdetail"
                className="form-control"
                value={staff.name}
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {bug.updates.map(({ time, content, authorID }, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <strong>{formatTime(time)}</strong>{' '}
                <ContentParser content={content} />
              </div>
              <div className="text-primary">
                <PersonLink
                  person={peopleList.find((person) => person.id === authorID)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BugDetail
