// import App from 'next/app';
import React, { useEffect } from 'react';
import {useStore} from 'react-redux'
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { wrapper } from '~/store/store'
import {PersistGate} from 'redux-persist/integration/react';

import '~/scss/style.scss';
import '~/scss/custom.scss';

function App({ Component, pageProps }) {
    const store = useStore();
    const getLayout = Component.getLayout || ((page) => <DefaultLayout children={page} />);

    useEffect(() => {      
        document.body.style.zoom = 1.0
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