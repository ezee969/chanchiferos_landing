import React from 'react';
import PropTypes from 'prop-types';
import { ProductImages, ProductInfo, ProductNotFound } from './components';

const Product = ({ product }) => {
  if (!product) return <ProductNotFound />;

  return (
    <div className="flex justify-center dark:bg-slate-800 w-full min-h-screen">
      <div className="py-48  grid grid-cols-2  w-[65%] gap-8">
        <ProductImages image={product.img} />
        <ProductInfo
          title={product.title}
          reviews={product.reviews}
          price={product.price}
        />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
