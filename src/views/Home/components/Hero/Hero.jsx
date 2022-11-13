import React from 'react';
import { TranslatedText } from 'components';
//components/ui
import heroWave from 'utils/images/wave.png';
import useAudio from 'hooks/useAudios';
import pigSqueal from 'utils/mp3/pig.mp3';
import pigsPainting from 'utils/images/pigsPainting.jpg';

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [playing, toggle] = useAudio(pigSqueal);

  return (
    <section
      style={{
        backgroundImage: `url(${heroWave})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ' 100% 60%',
        backgroundPosition: 'bottom',
      }}
      className={` px-96 w-full h-[100vh] bg-neutral-50 dark:bg-slate-800 flex flex-row justify-center gap-12 items-center transition-all duration-200`}
    >
      <div className="w-3/5 text-left animate-fadeIn">
        <p className="tracking-tighter font-semibold text-slate-600 dark:text-neutral-200">
          <TranslatedText tid={'buyNow'} />
        </p>
        <p className="text-6xl text-start font-bold text-slate-800 dark:text-neutral-50">
          <TranslatedText tid={'bestPigs'} />{' '}
          <span className="text-6xl font-bold text-amber-500">
            <TranslatedText tid={'handReach'} />
          </span>
        </p>
        <p className="text-6xl font-bold text-amber-500"></p>
        <p className="my-8 text-xl text-slate-500 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit
          dolore aliquam fuga sint quibusdam fugit officia illum amet, facilis nobis
          incidunt dignissimos, laborum a voluptas!
        </p>
        <p className="text-slate-700 font-bold text-lg mb-4"></p>
        <div className="flex  gap-3 mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border-rose-400 w-2/3 font-normal py-4 px-4 text-lg h-full rounded-md border-2  focus:outline-none focus:border-rose-500 dark:text-neutral-100 dark:placeholder:text-neutral-100 dark:bg-slate-800 dark:border-neutral-100"
          />
          <button className="rounded-lg cursor-pointer py-3 px-8 bg-rose-500 text-lg text-white font-normal hover:bg-rose-500 transition-all">
            <TranslatedText tid="notifyMe" />
          </button>
        </div>
        <p className="text-slate-500">
          <TranslatedText tid={'weCareAboutData'} />
          <span className="ml-1 cursor-pointer underline text-slate-700">
            <TranslatedText tid="privacyPolicy" />
          </span>
        </p>
      </div>
      <div
        onClick={toggle}
        onMouseDown={toggle}
        className="py-5 w-2/5 animate-floating  cursor-grab  active:cursor-grabbing active:animate-spin hover:animate-floatingExcited "
      >
        <img
          src={pigsPainting}
          alt=""
          className="border-amber-500  border h-auto w-full rounded-lg "
        />
      </div>
    </section>
  );
};

export default Hero;
