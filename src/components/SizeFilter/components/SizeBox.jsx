import React from 'react';
import PropTypes from 'prop-types';

const SizeBox = ({ size, selected, handleSizeSelect }) => {
  const borderColor = selected === size ? 'border-rose-500' : 'border-gray-300';
  return (
    <li
      onClick={handleSizeSelect}
      className={`select-none flex items-center cursor-pointer rounded p-2 ${borderColor} border-2`}
      id={size}
    >
      {size}
    </li>
  );
};

SizeBox.propTypes = {
  size: PropTypes.string.isRequired,
};

export default SizeBox;
