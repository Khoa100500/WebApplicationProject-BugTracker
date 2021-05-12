const BugDetail = ({ bugList, selectedBugID }) => {
  const bug = bugList.filter((bug) => bug.id === selectedBugID)[0]
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-end">
        <h5>
          Bug <strong className="text-primary">#{bug?.id}</strong>
        </h5>
        <div className="btn-group">
          <button className="btn btn-outline-success">Update</button>
          <button className="btn btn-outline-primary">Forward</button>
          <button className="btn btn-outline-danger">Kill</button>
        </div>
      </div>
      <div className="card-body">Title</div>
    </div>
  )
}

export default BugDetail
