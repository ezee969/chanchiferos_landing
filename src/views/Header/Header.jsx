/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { links } from './utils/links';
//components/ui
import { LanguageSelector, ThemeSwitch } from './components';
import ChanchiferosBaner from 'utils/images/ChanchiferosBaner';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(120);

  const styles = {
    active: {
      visibility: 'visible',
      position: 'fixed',
      top: 0,
    },
    hidden: {
      visibility: 'hidden',
      position: 'fixed',
      transform: 'translateY(-100%)',
    },
  };

  const renderLinks = links.map(({ to, text }) => (
    <li
      className=" text-lg text-neutral-50 hover:text-neutral-200 focus:text-neutral-200"
      key={to}
    >
      <Link to={to}>{text}</Link>
    </li>
  ));

  const handleScroll = () => {
    const currentScrollHeight = window.pageYOffset;
    const isScrollingDown = currentScrollHeight > scrollHeight;

    setShow(!isScrollingDown);
    setScrollHeight(currentScrollHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return (
    <header
      style={show ? styles.active : styles.hidden}
      className="flex w-full transition-all  bg-rose-500 py-6 px-32 justify-between opacity-95 z-50 duration-[0.5s]"
    >
      <Link to={'/chanchiferos_landing'}>
        <ChanchiferosBaner />
      </Link>
      <div style={{}} className="flex gap-48  items-center">
        <nav>
          <ul className="flex gap-12 ">{renderLinks}</ul>
        </nav>
        <div className="flex items-center gap-8">
          <LanguageSelector />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
