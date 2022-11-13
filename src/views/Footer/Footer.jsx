import React from 'react';
import FacebookIcon from 'utils/images/FacebookIcon';
import InstagramIcon from 'utils/images/InstagramIcon';
import TikTokIcon from 'utils/images/TikTokIcon';
import YoutubeIcon from 'utils/images/YoutubeIcon';

const Footer = () => {
  return (
    <div className="flex w-full flex-col text-neutral-50">
      <div className=" bg-rose-300 py-6 px-10 flex justify-center items-center gap-5">
        <FacebookIcon />
        <InstagramIcon />
        <TikTokIcon />
        <a
          href="https://www.youtube.com/watch?v=VGi-9U1HgJA&t=31&ab_channel=ROYALPIGS"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon />
        </a>
      </div>
      <div className="bg-rose-500 py-4 px-10 flex justify-center items-center text-lg">
        © 2022 Copyright: Chanchiferos brothers
      </div>
    </div>
  );
};

export default Footer;
