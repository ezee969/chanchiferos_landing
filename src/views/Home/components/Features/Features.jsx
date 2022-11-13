import React, { useRef, useEffect } from 'react';
import FeatureCard from './components/FeatureCard';
import { TranslatedText } from 'components';
import { features } from './utils/features';

const Features = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const renderFeatures = features.map((feature, i) => (
    <FeatureCard feature={feature} key={i} />
  ));

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

    observer.observe(titleRef.current);
    observer.observe(subtitleRef.current);
  }, []);

  return (
    <section className="py-52 px-72 items-center bg-sky-50 flex flex-col gap-14 dark:bg-slate-800">
      <div className="gap-6 flex flex-col text-center">
        <p
          ref={titleRef}
          className="text-4xl font-semibold text-slate-800 dark:text-neutral-50"
        >
          <TranslatedText tid={'franchise'} />
        </p>
        <p ref={subtitleRef} className="text-2xl text-slate-400 ">
          <TranslatedText tid={'moreThanPigs'} />
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {renderFeatures}
      </div>
    </section>
  );
};

export default Features;
