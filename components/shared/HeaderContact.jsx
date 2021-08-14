import React, { useEffect, useState } from 'react';
import Logo from '~/components/elements/Logo';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderContact = () => {
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
        <header
            className="header "
            data-sticky="true"
            id="headerSticky">
            
            {/* <NavigationDefault /> */}
        </header>
    );
};

export default HeaderContact;
