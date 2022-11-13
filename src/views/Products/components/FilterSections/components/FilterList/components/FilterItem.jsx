import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

const FilterItem = ({ item }) => {
  return (
    <li className="flex items-center select-none" key={uuid()}>
      <input
        id={item}
        className="mr-2 h-4 w-4 transition-all active:scale-110 "
        type="checkbox"
      />
      <label htmlFor={item}>{item}</label>
    </li>
  );
};

FilterItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default FilterItem;
