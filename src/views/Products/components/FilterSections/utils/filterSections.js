import { TranslatedText } from 'components';

export const listSections = [
  {
    title: 'Product',
    options: [
      <TranslatedText tid="t-shirts" />,
      <TranslatedText tid="sweatshirts" />,
      <TranslatedText tid="shoes" />,
      <TranslatedText tid="sportShoes" />,
      <TranslatedText tid="accessories" />,
      'Tops',
      'Shorts',
      <TranslatedText tid="hats" />,
      <TranslatedText tid="socks" />,
    ],
  },
  {
    title: <TranslatedText tid="gender" />,
    options: [
      <TranslatedText tid="male" />,
      <TranslatedText tid="female" />,
      'Bruh',
    ],
  },
  {
    title: <TranslatedText tid="brand" />,
    options: ['Adidas', 'Nike', 'Puma', 'Reebok', 'New Balance'],
    searchBar: true,
  },
];
