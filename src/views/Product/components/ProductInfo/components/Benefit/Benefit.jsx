import React from 'react';

const Benefit = ({ benefit }) => {
  return (
    <div className="flex gap-2 w-1/2">
      <div className="h-8 w-8 pt-[1px]">
        <img className="h-auto w-full" src={benefit.img} alt="" />
      </div>
      <div>
        <p className="text-base font-medium">{benefit.title}</p>
        <p className="text-sm text-slate-500">{benefit.description}</p>
      </div>
    </div>
  );
};

export default Benefit;
