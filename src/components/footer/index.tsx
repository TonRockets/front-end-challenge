import { memo } from "react";
import Styles from 'components/footer/Footer.module.scss';

const Footer: React.FC = () => {
    return <footer className={Styles.footer}></footer>
};

export default memo(Footer);
