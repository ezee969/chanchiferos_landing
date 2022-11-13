import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'context/theme';
import sunImg from 'utils/images/sun.png';
import moonImg from 'utils/images/moon.png';

const ThemeSwitch = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [isSelected, setIsSelected] = useState(false);
  const selectedImgStyle = isSelected ? moonImg : sunImg;
  const selectedCircleStyle = isSelected ? 'translate-x-4' : 'translate-x-0';

  useEffect(() => {
    if (theme === 'dark') {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setIsSelected(!isSelected);
    setTheme(theme === null ? 'dark' : null);

    localStorage.setItem('theme', theme === null ? 'dark' : null);
  };

  return (
    <div
      className={`flex w-[48px] h-[20px] rounded-full cursor-pointer items-center bg-[#aab4be] border border-slate-500`}
      onClick={handleThemeSwitch}
    >
      <img
        className={`active:bg-slate-900  h-[32px] w-[32px] bg-slate-800 rounded-full ${selectedCircleStyle}  transition-all duration-200 p-1`}
        src={selectedImgStyle}
        alt=""
      />
    </div>
  );
};

export default ThemeSwitch;
