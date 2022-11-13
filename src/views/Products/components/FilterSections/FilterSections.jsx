import React from 'react';
import { listSections } from './utils/filterSections';
import uuid from 'react-uuid';
//components/ui
import { FilterList } from './components';
import { ColorFilter, SizeFilter } from 'components';

const FilterSections = () => {
  const renderFilterLists = listSections.map((section, i) => (
    <FilterList key={uuid()} section={section} />
  ));

  return (
    <div className="flex w-[20%] my-32  flex-col dark:text-neutral-100">
      {renderFilterLists}
      <SizeFilter styles={'py-5 border-t font-medium'} />
      <ColorFilter styles={'py-5 border-t font-medium'} />
    </div>
  );
};

export default FilterSections;
