import React, { useState } from 'react';
import { colors } from './utils/colors';
import uuid from 'react-uuid';
//components/ui
import ColorBox from './components/ColorBox';

const ColorFilter = ({ styles }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (e) => {
    if (selectedColor === e.target.id) {
      return setSelectedColor(null);
    }
    setSelectedColor(e.target.id);
  };

  const renderColors = colors.map((color) => (
    <ColorBox
      selectedColor={selectedColor}
      color={color}
      handleColorSelect={handleColorSelect}
      key={uuid()}
    />
  ));

  return (
    <div className={`flex flex-col gap-2 ${styles}`}>
      <p>
        Color: <span className="ml-1">{selectedColor?.split('-')[1]}</span>
      </p>
      <ul className="flex gap-2">{renderColors}</ul>
    </div>
  );
};

export default ColorFilter;
