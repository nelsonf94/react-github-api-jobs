/** React imports */
import React from 'react';

const Job = (props) => {
  const {job} = props;
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top img-fluid border-bottom" style={{height: '225px', width: '100%'}} src={job.company_logo} alt="Company logo" />

        <div className="card-body">

          <p className="card-text">
            <small className="text-muted">{job.type} / {job.location}</small><br></br>
            <small className="text-muted">{job.company}</small>
          </p>

          <h6 className="card-title text-truncate" style={{maxWidth: '100%'}}>{job.title}</h6>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Job;