import React from 'react';
import uuid from 'react-uuid';
//components/ui
import FilterItem from './components/FilterItem';

const FilterList = ({ section }) => {
  const renderOptions = section.options.map((item) => (
    <FilterItem key={uuid()} item={item} />
  ));

  const searchBar = section.hasOwnProperty('searchBar') ? (
    <input
      className="border border-slate-300 rounded p-2 w-full focus:outline-none"
      type="text"
    />
  ) : null;

  return (
    <div className="border-t py-5 flex flex-col gap-2">
      <p className="font-medium">{section.title}</p>
      {searchBar}
      <ul className="flex flex-col gap-2">{renderOptions}</ul>
    </div>
  );
};

export default FilterList;
export { default as FilterList } from './FilterList';
