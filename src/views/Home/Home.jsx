import React from 'react';
import { Hero, Features } from './components';

const Home = () => {
  return (
    <main className="flex flex-col text-slate-700 w-full">
      <Hero />
      <Features />
    </main>
  );
};

export default Home;
