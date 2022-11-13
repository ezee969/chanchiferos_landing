import { TranslatedText } from 'components';
import React from 'react';
import bellImg from 'utils/images/notification.png';

const SubscriptionSection = () => {
  return (
    <div className="flex flex-col  items-center w-full py-16 bg-yellow-100 gap-6">
      <div className="flex flex-col gap-1 items-center">
        <p className="font-medium tracking-tight text-sm text-slate-500">
          <TranslatedText tid="subscribeUpper" />
        </p>
        <p className="text-4xl font-medium text-slate-800">
          <TranslatedText tid="getTheLatest" />
        </p>
      </div>
      <div className="flex">
        <input
          className="w-96 rounded-l border border-slate-300  p-3 focus:outline-none"
          type="text"
          placeholder="Email"
        />
        <button
          className="flex items-center gap-1 button button-pink py-3 px-5 bg-red-500 rounded-r text-white transition-all hover:bg-red-600 active:bg-opacity-80"
          data-ripple-light="true"
        >
          <TranslatedText tid="subscribe" />
          <img className="w-6 h-6" src={bellImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
