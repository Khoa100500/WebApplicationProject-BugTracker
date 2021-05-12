import BtnUpdate from './BtnUpdate.component'
import BtnForward from './BtnForward.component'
import BtnKill from './BtnKill.component'

const BugDetail = ({ selectedBugID, bugList, peopleList }) => {
  const bug = bugList.filter((bug) => bug.ID === selectedBugID)[0]
  const getNameByID = (ID) =>
    peopleList.filter((user) => user.ID == ID)[0]?.name

  return (
    <div className="card bg-primary text-light">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>
          Bug <strong>#{bug?.ID}</strong>
        </h5>
        <div className="btn-group ">
          <BtnUpdate />
          <BtnForward />
          <BtnKill />
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
              value={`@user${bug?.userID} | ${getNameByID(bug?.userID)}`}
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
              value={`@staff${bug?.staffID} | ${getNameByID(bug?.staffID)}`}
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BugDetail
