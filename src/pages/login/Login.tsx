import React, {memo} from 'react';
import {Input, FormStatus} from 'components'
import Styles from 'pages/login/Login.module.scss';

const Login: React.FC = () => {
   return (
      <div className={Styles.login}>
         <form className={Styles.form}>
            <h2>Login</h2>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
            <Input type="password" name="password" placeholder="Digite sua senha" />
            <button className={Styles.submit} type="submit">Entrar</button>
            <span className={Styles.link}>Criar conta</span>
            <FormStatus />
         </form>
         <footer className={Styles.footer}></footer>
      </div>
   );
};

export default memo(Login);
