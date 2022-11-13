import React from 'react';
import bigPigImg from 'utils/images/big_pig.png';
import boarImg from 'utils/images/boar.png';

const ProductImages = ({ image }) => {
  return (
    <div className="grid gap-4 grid-cols-2">
      <div className=" rounded-lg bg-amber-100 col-span-2 p-8">
        <img className="h-auto w-full " src={bigPigImg} alt="" />
      </div>
      <div className="flex rounded-lg bg-amber-100">
        <img className="h-auto w-full place-self-center" src={image} alt="" />
      </div>
      <div className="flex rounded-lg bg-amber-100">
        <img className="h-auto w-full  place-self-center" src={boarImg} alt="" />
      </div>
    </div>
  );
};

export default ProductImages;
