/** React imports */
import React from 'react';

/** Job Service */
import JobService from '../../Services/JobService';

/**
 * Subscribe to catch the search Job result
 */
const subscribe_searchJob = (callback) => {
  JobService.jobsList.subscribe(callback);
}

class SearchJob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    subscribe_searchJob((items) => {
      this.setState({items: items});
    });
  }


  render()
}

export default SearchJob;