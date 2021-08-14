import React, { Component } from 'react';
import Link from 'next/link';
import FormChangeServices from './modules/FormChangeServices';
import { useSelector } from 'react-redux'
import AccountMenuSidebar from './modules/AccountMenuSidebar';

const UserInformation = ({  }) => {

    const accountLinks = [
        {
            text: 'Contact',
            url: '/admin',
            icon: 'icon-user',
            
        },
        {
            text: 'Services',
            url: '/admin/services',
            icon: 'icon-alarm-ringing',
            active: true,
        },
    ];
    
    return (
        <section className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="ps-page__left">
                            <AccountMenuSidebar data={accountLinks}/>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="ps-page__content">
                            <FormChangeServices />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserInformation;
