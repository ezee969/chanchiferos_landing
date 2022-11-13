import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//components/ui
import { TranslatedText } from 'components';
import arrow from 'utils/images/arrow.png';

const FeatureCard = ({ feature }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`
      flex flex-col w-96 rounded-md shadow-lg gap-8 p-9 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-900 dark:text-neutral-50 `}
    >
      <div className={`p-6 w-20 rounded-lg ${feature.bgColor}`}>
        <img className="w-full h-auto" src={feature.image} alt="" />
      </div>
      <p className="font-bold text-xl text-slate-800 dark:text-neutral-100">
        {feature.title}
      </p>
      <p className="mb-2 text-lg text-slate-500">{feature.description}</p>
      <div className="flex items-center gap-2 self-end cursor-pointer">
        <p className="text-rose-500 ">
          <TranslatedText tid="learnMore" />
        </p>{' '}
        <img className="rotate-90 w-7" src={arrow} alt="" />
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default FeatureCard;
