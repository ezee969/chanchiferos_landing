import { useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from 'context/language';

const TranslatedText = ({ tid }) => {
  //tid = text id (from the translation file)
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
};

TranslatedText.propTypes = {
  tid: PropTypes.string.isRequired,
};

export default TranslatedText;
