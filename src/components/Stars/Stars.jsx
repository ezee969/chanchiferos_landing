import React from 'react';
import starImg from 'utils/images/star.png';

const Stars = () => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {stars.map((star) => (
        <img key={star} className="h-4 w-4" src={starImg} alt="star" />
      ))}
    </>
  );
};

export default Stars;
