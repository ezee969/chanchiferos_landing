import { TranslatedText } from 'components';

export const links = [
  { to: '/chanchiferos_landing/', text: 'Home' },
  {
    to: '/chanchiferos_landing/register',
    text: <TranslatedText tid={'register'} />,
  },
  {
    to: '/chanchiferos_landing/products',
    text: <TranslatedText tid={'products'} />,
  },
];
