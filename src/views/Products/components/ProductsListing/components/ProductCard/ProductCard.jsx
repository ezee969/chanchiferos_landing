import React, { useState } from 'react';
import PropTypes from 'prop-types';
//components/ui
import { Link } from 'react-router-dom';
import heartImg from 'utils/images/heart.png';
import shoppingImg from 'utils/images/shopping.png';
import eyeImg from 'utils/images/eye.png';
import miniArrowImg from 'utils/images/mini-arrow.png';
import { TranslatedText, Stars } from 'components';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteStyle = isFavorite
    ? 'bg-rose-600 hover:bg-rose-700'
    : 'bg-gray-400 hover:bg-rose-400';

  return (
    <div className=" flex flex-col  ">
      <div className=" w-72 p-3 mb-3 bg-amber-50">
        <div
          onClick={() => setIsFavorite(!isFavorite)}
          className={`select-none transition-all active:scale-95  cursor-pointer p-2 h-10 w-10 ${favoriteStyle} flex justify-center items-center rounded-lg relative left-56`}
        >
          <img className="h-auto w-3" src={heartImg} alt="" />
        </div>
        <img className="h-auto w-full " src={product.img} alt="" />
      </div>
      <div className=" flex justify-between font-semibold text-lg">
        <p>{product.title.toUpperCase()}</p>
        <p>${product.price}</p>
      </div>
      <div className="gap-[1px]  flex items-center">
        <Stars />
        <p className="pl-1 text-sm text-slate-500 tracking-tight">
          {product.reviews} <TranslatedText tid="reviews" />
        </p>
      </div>
      <div className="w-full flex gap-2 mt-5 mb-2">
        <button className="w-1/2 bg-rose-500 rounded py-2 hover:bg-rose-600 transition-all">
          <img className="h-6 w-6 m-auto" src={shoppingImg} alt="" />
        </button>

        <Link
          className="w-1/2 bg-amber-100 rounded py-2 hover:bg-amber-50 transition-all"
          to={`/chanchiferos_landing/products/${product.id}`}
        >
          <img className="h-6 w-6 m-auto" src={eyeImg} alt="" />
        </Link>
      </div>
      <Link
        to={`/chanchiferos_landing/products/${product.id}`}
        className="flex justify-between items-center cursor-pointer px-2 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-slate-900 transition-all"
      >
        <TranslatedText tid="seeDetails" />
        <img className="w-6 h-4" src={miniArrowImg} alt="" />
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
