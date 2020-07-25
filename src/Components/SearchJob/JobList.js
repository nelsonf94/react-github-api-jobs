/** React imports */
import React from 'react';

/** Job Component */
import Job from './Job';

const JobList = (props) => {
  const {items} = props;

  const jobs = items.map(e => (<Job key={e.id} job={e}></Job>));

  return (
    <ul>
      {jobs}
    </ul>
  );
}


export default JobList;