import React from 'react';
import { isAuthenticated, getCookie } from '~/components/shared/authenticate/Authenticate'
import UserRepository from '~/repositories/UserRepository';
import Contact from '~/components/partials/Contact';
import AdminPage from '~/components/layouts/AdminPage';

const BecomeAVendorPage = () => {

    return (
        <AdminPage  title="Admin" boxed={true}>
            <div className="ps-page--my-account">
                <Contact/>
            </div>
        </AdminPage>
    );
};

export async function getServerSideProps(context) {
    const res = isAuthenticated(context)
    if (res == false) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        }
    } else {
        const userId = getCookie('userId', context.req)
        const token = getCookie('jwt', context.req)

        return {
            props: { },
        }
        
    }

}


export default BecomeAVendorPage;
