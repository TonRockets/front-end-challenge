import React, {memo} from 'react';
import Spinner from 'components/spinner';
import Styles from 'pages/login/Login.module.scss';

const Login: React.FC = () => {
   return (
      <div className={Styles.login}>
         <form className={Styles.form}>
            <h2>Login</h2>
            <div className={Styles.inputWrap}>
               <input type="email" name="email" placeholder="Digite seu e-mail" />
               <span className={Styles.status}>&#128545;</span>
            </div>
            <div className={Styles.inputWrap}>
               <input type="password" name="password" placeholder="Digite sua senha" />
               <span className={Styles.status}>&#128545;</span>
            </div>
            <button className={Styles.submit} type="submit">Entrar</button>
            <span className={Styles.link}>Criar conta</span>
            <div className={Styles.errorWrap}>
               <Spinner className={Styles.spinner} />
               <span className={Styles.error}>Error</span>
            </div>
         </form>
         <footer className={Styles.footer}></footer>
      </div>
   );
};

export default memo(Login);
