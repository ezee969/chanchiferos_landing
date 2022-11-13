import React from 'react';
import { products } from '../../../../utils/files/products';
//components/ui
import { ProductCard, PageNumber, ProductsSort } from './components';

const ProductsListing = () => {
  const renderProducts = products.map((product, i) => (
    <ProductCard key={i} product={product} />
  ));

  return (
    <div className="flex w-[80%] flex-col py-6 px-4 gap-8 items-center dark:text-neutral-100">
      <ProductsSort />
      <div className="flex flex-wrap min-h-screen gap-10 justify-center">
        {renderProducts}
      </div>
      <PageNumber />
    </div>
  );
};

export default ProductsListing;
