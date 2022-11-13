import React from 'react';
import PropTypes from 'prop-types';

const Number = ({ number, handlePageChange, currentPage }) => {
  const currentPageStyle =
    currentPage === number
      ? 'bg-rose-500 text-white  w-[41px] bg-opacity-95 h-[41px] hover:bg-rose-600'
      : 'w-10 h-10 hover:bg-gray-100 dark:hover:bg-slate-900  text-sm';

  if (number === '...') {
    return <li className="flex items-center justify-center w-10 h-10 ">{number}</li>;
  }
  return (
    <li
      id={number}
      onClick={handlePageChange}
      className={`transition-all active:bg-opacity-80 flex items-center justify-center transition-300 rounded-full cursor-pointer ${currentPageStyle}`}
    >
      {number}
    </li>
  );
};

Number.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Number;
