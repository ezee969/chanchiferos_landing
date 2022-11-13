import phoneImg from 'utils/images/phone.png';
import mailImg from 'utils/images/mail.png';
import { TranslatedText } from 'components';

export const contactMethods = [
  { title: <TranslatedText tid={'contactSales'} />, img: phoneImg },
  { title: <TranslatedText tid={'emailUs'} />, img: mailImg },
];
