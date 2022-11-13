import React from 'react';
import {
  OfferCard,
  ProductsListing,
  FilterSections,
  SubscriptionSection,
} from './components';

const Products = () => {
  return (
    <main className="flex flex-col text-slate-700 dark:bg-slate-800 w-full justify-center items-center">
      <section className="py-36 gap-24 flex flex-col items-center justify-center w-[65%]  ">
        <OfferCard />
        <div className="flex">
          <FilterSections />
          <ProductsListing />
        </div>
      </section>
      <section className="w-full">
        <SubscriptionSection />
      </section>
    </main>
  );
};

export default Products;
