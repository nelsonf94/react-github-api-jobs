/** React imports */
import React from 'react';
/** Job Service */
import JobService from '../../Services/Job';
/** JobList Container Component */
import JobList from './JobList';
/** Emply Component */
import Emply from './Emply';

/** Pagination Component */
import Pagination from '../Decorators/Paginator/Paginator';

class SearchJob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      pageOfItems: []
    };
  }

  componentDidMount() {
    this.subscribe_searchJob();
  }

  /**
   * Subscribe to Job Service
   */
  subscribe_searchJob() {
    JobService.jobsList.subscribe((newItems) => {
      const {items} = this.state;
      if (newItems.length) {
        // update state with new items
        this.setState({
          items: [...items, ...newItems],
        });
      }
    });
  }

  /**
   * Catch the on Change Page event
   * @param {*} pageOfItems
   */
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({pageOfItems: pageOfItems});
  }

  render() {
    const {pageOfItems} = this.state;

    return (
      <div className="album py-5 bg-light">
        <div className="container">
          {pageOfItems.length ? <JobList items={pageOfItems} /> : <Emply />}
          <Pagination
            items={this.state.items}
            onChangePage={(pageOfItems) => this.onChangePage(pageOfItems)}
            nextPageCurrentSearch={() => JobService.nextPageCurrentSearch()} />
        </div>
      </div>
    );
  }
}

export default SearchJob;