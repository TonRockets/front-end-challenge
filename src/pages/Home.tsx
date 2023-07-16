import i18n from 'common/locales/i18n';
import useLanguage from 'hooks/useLanguage';
import useTheme from 'hooks/useTheme';
import { Language, Theme } from 'store/slices/appSlice';
import Styles from 'components/button/Button.module.scss';

const Home = () => {
   const { theme, setCurrentTheme } = useTheme();
   const { setCurrentLanguage } = useLanguage();

   const setLanguageToEnglish = () => {
      setCurrentLanguage(Language.EN);
   };

   const themeFactory = () => {
      const setDarkTheme = () => {
         setCurrentTheme(Theme.Dark);
      };

      const setLightTheme = () => {
         setCurrentTheme(Theme.Light);
      };

      return {
         setDarkTheme,
         setLightTheme
      };
   };

   return (
      <div>
         <div>
            <div>Current theme is {theme} </div>
            <button onClick={themeFactory().setDarkTheme}>Set Dark Theme</button>
            <button onClick={themeFactory().setLightTheme}>Set Light Theme</button>
         </div>

         <div>
            <div className={Styles.label}>{i18n.t('greeting')}</div>
            <button className={Styles.button} onClick={setLanguageToEnglish}>
               Set Language to English
            </button>
         </div>
      </div>
   );
};

export default Home;
