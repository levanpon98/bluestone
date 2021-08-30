import React from 'react';
import { isAuthenticated, getCookie } from '~/components/shared/authenticate/Authenticate'
import UserRepository from '~/repositories/UserRepository';
import AdminAboutUs from '~/components/partials/AdminAboutUs';
import AdminPage from '~/components/layouts/AdminPage';

const BecomeAVendorPage = () => {

    return (
        <AdminPage  title="Admin" boxed={true}>
            <div className="ps-page--my-account">
                <AdminAboutUs/>
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
