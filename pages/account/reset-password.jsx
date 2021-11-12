import React, { useEffect } from 'react';
import Login from '~/components/partials/Login';
import AuthPage from '~/components/layouts/AuthPage';
import { ifAuthenticated } from '~/components/shared/authenticate/Authenticate'
import { connect, useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { wrapper } from '~/store/store';
const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Login',
        },
    ];

    return (
        <AuthPage title="Login" boxed={true}>
            <div className="ps-page--my-account">
                <ResetPassword />
            </div>
        </AuthPage>
    );
};

export default LoginPage;
