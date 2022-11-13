import React from 'react';
import PropTypes from 'prop-types';
import miniArrowImg from 'utils/images/mini-arrow.png';

const Arrow = ({ direction, onClick }) => {
  const directionStyle = direction === 'left' ? 'rotate-180' : 'rotate-0';

  return (
    <div
      id={direction}
      onClick={onClick}
      className={`cursor-pointer ${directionStyle} w-10 h-10 transition-all active:bg-opacity-80 flex items-center justify-center transition-300 rounded-full hover:bg-gray-100`}
    >
      <img
        id={direction}
        className=" w-4 h-3 "
        src={miniArrowImg}
        alt="mini-arrow"
      />
    </div>
  );
};

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Arrow;
