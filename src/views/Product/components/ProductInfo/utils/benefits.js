import co2Img from 'utils/images/co2.png';
import factoryImg from 'utils/images/factory.png';
import { TranslatedText } from 'components';

export const benefits = [
  {
    img: co2Img,
    title: <TranslatedText tid={'benefit1title'} />,
    description: <TranslatedText tid={'benefit1description'} />,
  },
  {
    img: factoryImg,
    title: <TranslatedText tid={'benefit2title'} />,
    description: <TranslatedText tid={'benefit2description'} />,
  },
];
