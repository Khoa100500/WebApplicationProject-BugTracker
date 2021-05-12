const BugDetail = ({ selectedBugID, bugList, customerList, staffList }) => {
  const bug = bugList.filter((bug) => bug.ID === selectedBugID)[0]
  const staff = staffList.filter((staff) => staff.ID == bug?.staffID)[0]
  const customer = customerList.filter(
    (customer) => customer.ID == bug?.customerID
  )[0]

  return (
    <div className="card bg-primary text-light">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>
          Bug <strong>#{bug?.ID}</strong>
        </h5>
        <div className="btn-group ">
          <button className="btn btn-outline-light">Update</button>
          <button className="btn btn-outline-light">Forward</button>
          <button className="btn btn-outline-light">Kill</button>
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
          <label className="col-2" htmlFor="customer">
            <strong>User</strong>
          </label>
          <div className="col-10">
            <input
              readOnly
              type="text"
              id="customer"
              className="form-control"
              value={`@customer${bug?.customerID} | ${customer?.name}`}
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
              value={`@staff${bug?.staffID} | ${staff?.name}`}
            />
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {bug?.updates.map(({ time, content }, index) => (
          <li key={index} className="list-group-item">
            <strong>{time}</strong>
            {' ' + content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BugDetail
