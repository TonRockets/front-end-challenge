
import {Spinner} from 'components';
import Styles from 'components/formStatus/FormStatus.module.scss'
    
const FormStatus: React.FC = () => {
    return (
        <div className={Styles.errorWrap}>
            <Spinner className={Styles.spinner} />
            <span className={Styles.error}>Error</span>
        </div>
    )
};

export default FormStatus;
