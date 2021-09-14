import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FooterLinks = () => {
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
        <div className="ps-footer__links">
            <div className="ps-container">
                <div className="header__left">
                    <div className="circle">
                        <i class="icon-telephone" aria-hidden="true"></i>
                    </div>
                    <p>{results.phone}</p>
                </div>
                <div className="header__center">
                    <div className="circle">
                        <i class="icon-envelope" aria-hidden="true"></i>
                    </div>
                    <p>{results.receive_email}</p>
                </div>
                <div className="header__right">
                    <div className="follow">
                        <div className="title">
                            Follow Us
                        </div>
                        <a href={results.instagram} target="_blank" className="header__right__list-icons">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href={results.facebook} target="_blank" className="header__right__list-icons">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href={results.linkedin} target="_blank" className="header__right__list-icons">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterLinks;
