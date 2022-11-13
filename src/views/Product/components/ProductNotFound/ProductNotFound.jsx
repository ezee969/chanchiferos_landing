import React from 'react';
import { Link } from 'react-router-dom';
//components/ui
import sadPigImg from 'utils/images/sad-pig.png';
import { TranslatedText } from 'components';

const ProductNotFound = () => {
  return (
    <div className="flex justify-center dark:bg-neutral-800 dark:text-neutral-100">
      <div className="min-h-screen py-48  grid grid-cols-3 w-[65%]">
        <div className=" flex items-center ">
          <img className="h-auto w-full grayscale" src={sadPigImg} alt="" />
        </div>
        <div className="col-span-2 p-10 flex flex-col justify-center gap-9">
          <p className="text-4xl font-bold">
            <TranslatedText tid="productNotFound" />
          </p>
          <p className="text-xl font-light">
            <TranslatedText tid="notFoundDescription" />
          </p>
          <div className="flex gap-5">
            <Link
              to={'/chanchiferos_landing/products'}
              className="bg-rose-400 text-lg py-2 px-6 text-white rounded transition-all hover:bg-rose-500"
            >
              <TranslatedText tid="visitProducts" />
            </Link>
            <button className="border border-rose-400 text-rose-400 text-lg py-2 px-3 rounded transition-all hover:bg-amber-100">
              <TranslatedText tid="contactUs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
