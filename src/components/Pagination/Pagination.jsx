import React from "react";

const Pagination = ({ bookPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / bookPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="pageItem">
            <a onClick={() => paginate(number)} className="pageLink">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
