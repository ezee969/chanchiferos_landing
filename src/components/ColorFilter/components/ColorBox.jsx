import React from 'react';
import PropTypes from 'prop-types';

const ColorBox = ({ color, handleColorSelect, selectedColor }) => {
  const borderColor =
    selectedColor === color ? 'border-rose-500' : 'border-gray-300';

  return (
    <li
      className={`cursor-pointer h-9 w-9 flex items-center justify-center rounded-full transition-all active:scale-110 border-2 ${borderColor}`}
      onClick={handleColorSelect}
      id={color}
    >
      <div id={color} className={`${color} h-6 w-6 rounded-full`}></div>
    </li>
  );
};

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  handleColorSelect: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
};

export default ColorBox;
