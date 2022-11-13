import { TranslatedText } from 'components';
import React from 'react';

const ProductsSort = () => {
  return (
    <div className="w-full flex justify-between items-center px-2">
      <p className="font-bold">
        118 <TranslatedText tid="resultsFound" />
      </p>
      <div className="flex gap-3 items-center">
        <p>
          <TranslatedText tid="sortBy" />
        </p>
        <select
          className="w-32 px-3 py-2 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          name=""
          id=""
        >
          <option value={''}>Z-A</option>
          <option value={''}>A-Z</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsSort;
