import React from 'react';
import Spinner from 'components/spinner';
import Styles from 'pages/login/Login.module.scss';

const base64Img =
   'data:image/png;base64,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';
const Login: React.FC = () => {
   return (
      <div className={Styles.login}>
         <header className={Styles.header}>
            <img src={base64Img} />
            <h1>Cadastro de alguma coisa</h1>
         </header>
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

export default Login;
