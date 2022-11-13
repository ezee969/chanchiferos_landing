import { TranslatedText } from 'components';
import React from 'react';
import pigletImg from 'utils/images/pig-offer.png';

const OfferCard = () => {
  return (
    <div className="animate-fadeIn  flex items-center justify-around border-2 rounded-lg border-rose-100 p-2  w-full">
      <div className="w-40">
        <img className=" h-auto w-full rounded-lg " src={pigletImg} alt="" />
      </div>
      <div className="flex flex-col gap-2 justify-center p-2 mr-1 w-[65%]">
        <p className="text-2xl font-semibold dark:text-neutral-50">
          <TranslatedText tid="saveUp" />
        </p>
        <p className="text-slate-500">
          <TranslatedText tid="weBelieve" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        </p>
      </div>
      <button className="rounded-lg cursor-pointer py-3 px-9 bg-rose-500  text-white hover:bg-rose-600 transition-all">
        <TranslatedText tid="shopNow" />
      </button>
    </div>
  );
};

export default OfferCard;
