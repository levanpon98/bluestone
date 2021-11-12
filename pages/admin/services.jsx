import React from 'react';
import { isAuthenticated, getCookie } from '~/components/shared/authenticate/Authenticate'
import UserRepository from '~/repositories/UserRepository';
import AdminServices from '~/components/partials/AdminServices';
import AdminPage from '~/components/layouts/AdminPage';

const BecomeAVendorPage = () => {

    return (
        <AdminPage  title="Admin" boxed={true}>
            <div className="ps-page--my-account">
                <AdminServices/>
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


//http://localhost:3000/api/auth/reset-password?token=aasdfasdfqq3r