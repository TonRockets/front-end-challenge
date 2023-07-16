
import Styles from 'components/input/Input.module.scss'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    
const Input: React.FC<InputProps> = (props: InputProps) => {
    
    const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => { 
        event.target.readOnly = false
     }
    
    return (
        <div className={Styles.inputWrap}>
               <input {...props} readOnly onFocus={enableInput} />
               <span className={Styles.status}>&#128545;</span>
            </div>
    )
};

export default Input;
