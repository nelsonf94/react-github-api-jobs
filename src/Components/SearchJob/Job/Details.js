/** React imports */
import React from 'react';
/** css */
import './Details.scss'
/** Helper */
import ReactHtmlParser from 'react-html-parser';

/**
 * Modal Details
 * @param {*} props
 */
const DetailsModal = (props) => {
  const {job} = props;
  console.log(job)
  return (
    <div className="modal fade" id={`modal-${job.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <div>
              <span><small className="text-muted">{job.type} / {job.location}</small></span>
              <h5 className="modal-title" id="exampleModalLabel"> {job.title} </h5>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">{ReactHtmlParser(job.description)}</div>

                <div className="col-md-4">
                  <div className="column sidebar">

                    <div className="module logo">
                      <div className="inner">
                        <h2>{job.company}</h2>

                        <div className="logo">
                          <a target="_blank" rel="noopener" href={job.company_url}>
                            <img className="card-img-top img-fluid border-bottom" style={{height: '225px', width: '100%'}} src={job.company_logo} alt="Company logo" />
                          </a>
                        </div>

                        <p className="url">
                          <a target="_blank" rel="noopener" href={job.company_url}>{job.company_url}</a>
                        </p>
                      </div>
                    </div>

                    <div className="module highlighted">
                      <div className="inner">
                        <div className="inner">{ReactHtmlParser(job.how_to_apply)}</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;