import React from 'react';
import { pros } from './utils/pros';
import { benefits } from './utils/benefits';
import { contactMethods } from './utils/contactMethods';
//components/ui
import { ContactMethod, Benefit } from './components';
import { ColorFilter, Stars, TranslatedText, SizeFilter } from 'components';

const ProductInfo = ({ title, reviews, price }) => {
  const renderPros = pros.map((pro, i) => <li key={i}>{pro}</li>);
  const renderContactMethods = contactMethods.map((method, i) => (
    <ContactMethod key={i} method={method} />
  ));
  const renderBenefits = benefits.map((benefit, i) => (
    <Benefit key={i} benefit={benefit} />
  ));

  return (
    <div className="grid gap-9 text-lg dark:text-neutral-100">
      {/*  */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="font-medium ">{title}</p>
          <p className="font-medium ">${price}</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold  text-slate-500">5.0</p>
          <Stars />
          <p className="ml-4   text-red-600  cursor-pointer">
            <TranslatedText tid={'seeAll'} /> {reviews}{' '}
            <TranslatedText tid={'reviews'} />
          </p>
        </div>
      </div>
      {/*  */}
      <ColorFilter />
      {/*  */}
      <SizeFilter />
      {/*  */}
      <button className="w-full bg-rose-500 rounded py-2 hover:bg-rose-600 transition-all text-white">
        <TranslatedText tid={'addToCart'} />
      </button>
      {/*  */}
      <div className="py-8 border-b border-slate-300 mb-1">
        <p className="mb-2">
          <TranslatedText tid={'description'} />
        </p>
        <p className="text-sm text-slate-500">
          <TranslatedText tid={'productDescription'} />
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col gap-3">
        <p>
          <TranslatedText tid={'fabric&care'} />
        </p>
        <ul className="flex flex-col gap-3 list-disc text-sm text-slate-500 pl-8">
          {renderPros}
        </ul>
      </div>
      {/*  */}
      <div className="flex gap-3 w-full">{renderBenefits}</div>
      {/*  */}
      <button className="w-full text-rose-500 rounded py-2 hover:bg-amber-100 transition-all border border-rose-500">
        <TranslatedText tid={'addToFavorites'} />
      </button>
      {/*  */}
      <div className="flex flex-col gap-4">
        <p>
          <TranslatedText tid={'needSupport'} />
        </p>
        <div className="flex  gap-8">{renderContactMethods}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
