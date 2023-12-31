import i18n from 'common/locales/i18n';
import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { type RootState } from 'store';
import { type Language, setLanguage } from 'store/slices/appSlice';

const useLanguage = () => {
   const dispatch = useDispatch();

   const { language } = useSelector((state: RootState) => state.app);

   const setCurrentLanguage = useCallback((language: Language) => {
      i18n.changeLanguage(language);
      dispatch(setLanguage(language));
   }, []);

   return {
      language,
      setCurrentLanguage
   };
};

export default useLanguage;
