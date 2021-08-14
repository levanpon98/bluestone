import React, { useEffect, useState } from 'react';
import Logo from '~/components/elements/Logo';
import { stickyHeader } from '~/utilities/common-helpers';
import NavigationDefault from './NavigationDefault'

const HeaderDefault = () => {

    const [results, setResults] = useState({});
    const getContact = async () => {
        const res = await fetch('/api/contact')
        const json = await res.json()
        setResults(json.data)
    }

    useEffect(() => {
        getContact()
    }, [])

    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--sticky"
            data-sticky="true"
            id="headerSticky">
            <div className="header-wrapper">
                <div className="content">
                    <div className="header__contact">
                        <div className="ps-container">

                            <div className="header__left">
                                Tel {results.phone}
                            </div>
                            <div className="header__center">
                                Address {results.address}
                            </div>
                            <div className="header__right">
                                <div className="title">
                                    Follow Us
                                </div>
                                <a href={results.instagram} className="header__right__list-icons">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href={results.facebook} className="header__right__list-icons">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href={results.linkedin} className="header__right__list-icons">
                                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header__top">
                        <div className="ps-container">
                            <div className="header__left">
                                <Logo />
                                {/* <MenuCategoriesDropdown /> */}
                            </div>
                            <div className="header__center">
                                {/* <SearchHeader /> */}
                                <NavigationDefault />
                            </div>
                            <div className="header__right">
                                <button className="ps-btn">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <NavigationDefault /> */}
        </header>
    );
};

export default HeaderDefault;
