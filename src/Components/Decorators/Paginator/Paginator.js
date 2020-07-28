/** Import React */
import React from 'react';

/**
 * Paginator Component
 */
class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pager: {}};
  }

  componentDidMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(prevState.pager.currentPage);
    }
  }

  setPage(page) {
    const {items, pageSize} = this.props;
    const pager = this.getPager(items.length, page, pageSize);

    // update state
    this.setState({pager: pager});

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    if (pageOfItems.length < 6) {
      this.props.nextPageCurrentSearch();
      this.props.onChangePage(pageOfItems);
      return;
    }

    if (page < 1 || page > pager.totalPages) {
      this.props.nextPageCurrentSearch();
      this.props.onChangePage(pageOfItems);
      return;
    }

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 6
    pageSize = pageSize || 6;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages
    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    const {pager} = this.state;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (

      <nav aria-label="Page">
        <ul className="pagination pagination-sm justify-content-end">

          <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => this.setPage(1)}>First</a>
          </li>

          <li className="page-item">
            <a className="page-link" aria-label="Previous" onClick={() => this.setPage(pager.currentPage - 1)}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          {pager.pages.map((page, index) =>
            <li key={index} className={`page-item ${pager.currentPage === page ? 'active' : ''}`}>
              <a className="page-link" onClick={() => this.setPage(page)}>{page}</a>
            </li>
          )}

          <li className={'page-item'}>
            <a className="page-link" aria-label="Next" onClick={() => this.setPage(pager.currentPage + 1)}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>

          <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
            <a className="page-link" onClick={() => this.setPage(pager.totalPages)}>Last</a>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Pagination;