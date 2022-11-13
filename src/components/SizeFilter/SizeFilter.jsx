import React, { useState } from 'react';
import { sizes } from './utils/sizes';
//components/ui
import SizeBox from './components/SizeBox';
import { TranslatedText } from 'components';

const SizeFilter = ({ styles }) => {
  const [selected, setSelected] = useState(null);

  const handleSizeSelect = (e) => {
    if (selected === e.target.id) {
      return setSelected(null);
    }

    setSelected(e.target.id);
  };

  const renderSizes = sizes.map((size, i) => (
    <SizeBox
      key={i}
      size={size}
      selected={selected}
      handleSizeSelect={handleSizeSelect}
    />
  ));

  return (
    <div className={`flex flex-col gap-2 ${styles}`}>
      <p>
        <TranslatedText tid="size" />: <span className="ml-1">{selected}</span>
      </p>
      <ul className="flex gap-1">{renderSizes}</ul>
    </div>
  );
};

export default SizeFilter;
