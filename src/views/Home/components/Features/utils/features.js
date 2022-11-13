import binoculares from 'utils/images/binoculares.png';
import checkmark from 'utils/images/checkmark.png';
import mailbox from 'utils/images/mailbox.png';
import male from 'utils/images/male.png';
import music from 'utils/images/music.png';
import puzzle from 'utils/images/puzzle.png';
import { TranslatedText } from 'components';

export const features = [
  {
    image: binoculares,
    title: <TranslatedText tid="Feature 1" />,
    description:
      'Feature 1 description Feature 1 description Feature 1 description Feature 1 description',
    bgColor: 'bg-sky-100',
  },
  {
    image: checkmark,
    title: <TranslatedText tid="Feature 1" />,
    description:
      'Feature 2 description Feature 2 description Feature 2 description Feature 2 description',
    bgColor: 'bg-pink-100',
  },
  {
    image: mailbox,
    title: <TranslatedText tid="Feature 1" />,
    description:
      'Feature 3 description Feature 3 description Feature 3 description Feature 3 description',
    bgColor: 'bg-green-100',
  },
  {
    image: male,
    title: <TranslatedText tid="Feature 1" />,
    description:
      'Feature 4 description Feature 4 description Feature 4 description Feature 4 description',
    bgColor: 'bg-purple-100',
  },
  {
    image: music,
    title: <TranslatedText tid="Feature 1" />,
    description:
      'Feature 5 description Feature 5 description Feature 5 description Feature 5 description',
    bgColor: 'bg-blue-100',
  },
  {
    image: puzzle,
    title: <TranslatedText tid="Feature 1" />,
    description:
      'Feature 6 description Feature 6 description Feature 6 description Feature 6 description',
    bgColor: 'bg-slate-100',
  },
];
