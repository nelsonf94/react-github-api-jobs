/** React imports */
import React from 'react';

/** Job Service */
import JobService from '../../Services/Job';

/** JobList Container Component */
import JobList from './JobList';

class SearchJob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.subscribe_searchJob();
  }

  render() {
    const {items} = this.state;

    return (
      <JobList items={items}></JobList>
    );
  }

  /**
   * Subscribe to Job Service
   */
  subscribe_searchJob() {
    JobService.jobsList.subscribe(items => {
      this.setState({items: items});
      console.log(items);
    });
  }
}

export default SearchJob;