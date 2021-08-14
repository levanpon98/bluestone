import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '~/components/elements/Logo';
import NavigationDefault from '~/components/shared/NavigationDefault'
const FooterWidgets = () => {
    const [results, setResults] = useState({});
    const getContact = async () => {
        const res = await fetch('/api/contact')
        const json = await res.json()
        setResults(json.data)
    }

    useEffect(() => {
        getContact()
    }, [])

    return (
        <div className="ps-footer__widgets">
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
    )
};

export default FooterWidgets;
