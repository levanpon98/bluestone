// import App from 'next/app';
import React, { useEffect } from 'react';
import {useStore} from 'react-redux'
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { wrapper } from '~/store/store'
import {PersistGate} from 'redux-persist/integration/react';

import '~/scss/style.scss';
import '~/scss/style.scss';
import '~/scss/home-default.scss';
import '~/scss/market-place-1.scss';
import '~/scss/market-place-2.scss';
import '~/scss/market-place-3.scss';
import '~/scss/market-place-4.scss';
import '~/scss/electronic.scss';
import '~/scss/furniture.scss';
import '~/scss/organic.scss';
import '~/scss/technology.scss';
import '~/scss/autopart.scss';
import '~/scss/electronic.scss';
import '~/scss/custom.scss';

function App({ Component, pageProps }) {
    const store = useStore();
    const getLayout = Component.getLayout || ((page) => <DefaultLayout children={page} />);

    useEffect(() => {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);
    }, []);
    return getLayout(
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
            <Component {...pageProps} />
        </PersistGate>
    );
}

export default wrapper.withRedux(App);