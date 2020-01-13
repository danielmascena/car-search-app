// A component to render a pagination.
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { actionCreation } from '../actions';

import './Pagination.css';

const mapStateToProps = state => ({
  queries: state.queries,
  totalPages: state.totalPages,
  loading: state.loading
});

let Pagination: React.FC = ({ dispatch, queries, totalPages, loading }) => {
  const [currentPage, setCurrentPage] = useState(queries.page);
  useEffect(() => {
    if (currentPage > 0 && currentPage <= totalPages)
      dispatch(actionCreation.searchByPage(currentPage));
  }, [currentPage, dispatch, totalPages]);
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };
  const handlePreviousPage = () => {
    if (currentPage - 1 > 0)
      setCurrentPage((currentPage: number) => currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage + 1 <= totalPages)
      setCurrentPage((currentPage: number) => currentPage + 1);
  };
  return (
    <footer className={`list-car-pagination ${loading ? 'loading' : ''}`}>
      <div>
        <div role="navigation">
          <ul>
            <li className="link-group-pagination">
              <span
                className="default-link"
                onClick={handleFirstPage}
                role="link"
              >
                First
              </span>
              <span
                className="default-link"
                onClick={handlePreviousPage}
                role="link"
              >
                Previous
              </span>
            </li>
            <li className="link-group-pagination">
              <span
                className="default-link"
                onClick={handleNextPage}
                role="link"
              >
                Next
              </span>
              <span
                className="default-link"
                onClick={handleLastPage}
                role="link"
              >
                Last
              </span>
            </li>
          </ul>
        </div>
        Page {totalPages && queries.page} of {totalPages}
      </div>
    </footer>
  );
};

Pagination = connect(mapStateToProps)(Pagination);

export default Pagination;
