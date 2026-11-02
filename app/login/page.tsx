import React from 'react';
import "./styles/style.css";
import LoginForm from './_components/Layout/LoginForm';

const LoginPage = () => {
    return (
        <section id='login'>
            <h1 className='login__logo'>
                WorkFlow HR
            </h1> {/* .login__logo : end */}
            <LoginForm />
        </section>
    );
};

export default LoginPage;