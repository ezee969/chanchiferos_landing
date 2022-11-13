import React, { useState } from 'react';
import uuid from 'react-uuid';
//components/ui
import { Number, Arrow } from './components';

const PageNumber = () => {
  const [currentPage, setCurrentPage] = useState('1');
  const numbers = ['1', '2', '3', '4', '5', '...', '10'];

  const handlePageChange = (e) => {
    const { id } = e.target;

    if (id === currentPage) return;

    setCurrentPage(id);
  };

  const renderNumbers = numbers.map((number) => (
    <Number
      key={uuid()}
      handlePageChange={handlePageChange}
      number={number}
      currentPage={currentPage}
    />
  ));

  const handleArrow = (e) => {
    const { id } = e.target;

    if (id === 'left') {
      if (currentPage === '1') return;

      setCurrentPage((prev) => (prev - 1).toString());
    } else {
      if (currentPage === '10') return;

      setCurrentPage((prev) => (parseInt(prev) + 1).toString());
    }
  };

  return (
    <div className="flex gap-4 items-center mt-2">
      <Arrow direction="left" onClick={handleArrow} />
      <ul className="flex gap-1 items-center">{renderNumbers}</ul>
      <Arrow direction="right" onClick={handleArrow} />
    </div>
  );
};

export default PageNumber;
