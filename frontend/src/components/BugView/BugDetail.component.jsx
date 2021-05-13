import BtnUpdate from './BtnUpdate.component'
import BtnForward from './BtnForward.component'
import BtnKill from './BtnKill.component'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const BugDetail = ({ selectedBugID }) => {
  const {
    user: { role },
    bugList,
    peopleList,
  } = useContext(GlobalContext)

  const bug = bugList.filter((bug) => bug.id === selectedBugID)[0]
  const getNameByID = (id) =>
    peopleList.filter((user) => user.id === id)[0]?.name

  return (
    <div className="card bg-primary text-light">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>
          Bug <strong>#{bug?.id}</strong>
        </h5>
        <div className="btn-group ">
          {['admin', 'staff'].includes(role) && <BtnUpdate bug={bug} />}
          {['admin', 'staff'].includes(role) && <BtnForward bug={bug} />}
          {['admin', 'user'].includes(role) && (
            <BtnKill bugID={selectedBugID} />
          )}
        </div>
      </div>
      <div className="card-body bg-white text-dark">
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="title">
            <strong>Title</strong>
          </label>
          <div className="col-10">
            <input
              readOnly
              type="text"
              id="title"
              className="form-control"
              value={bug?.title}
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
              value={bug?.description}
            />
          </div>
        </div>

        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="user">
            <strong>User</strong>
          </label>
          <div className="col-10">
            <input
              readOnly
              type="text"
              id="user"
              className="form-control"
              value={`${getNameByID(bug?.userID)} [user${bug?.userID}]`}
            />
          </div>
        </div>
        <div className="row mb-2 align-items-center">
          <label className="col-2" htmlFor="staff">
            <strong>Staff</strong>
          </label>
          <div className="col-10">
            <input
              readOnly
              type="text"
              id="staff"
              className="form-control"
              value={`${getNameByID(bug?.staffID)} [staff${bug?.staffID}]`}
            />
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {bug?.updates.map(({ time, content, authorID }, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <strong>{time}</strong>
                {' ' + content}
              </div>
              <div>
                <small>{'by '}</small>
                <em className="text-primary">{getNameByID(authorID)}</em>
                <small className="text-secondary">
                  {' [' +
                    peopleList.filter((user) => user.id === authorID)[0]?.role +
                    authorID +
                    ']'}
                </small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BugDetail
