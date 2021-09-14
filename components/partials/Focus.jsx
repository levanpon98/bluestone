import React, { useState, useEffect } from 'react';

const VendorAbout = () => {
    const [results, setResults] = useState({});
    const getServices = async () => {
        const res = await fetch('/api/aboutus')
        const json = await res.json()
        setResults(json.data)
    }

    useEffect(() => {
        getServices()
    }, [])

    return (
        <div
            className="ps-vendor-focus bg--cover"
        >
            <div className="ps-container">
                <div className="ps-section__header">
                    <h4>
                        Our Focus
                    </h4>

                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="focus-item">
                                <div className="focus-item__icon">
                                    <img src="/static/img/icons/Group 211.png" alt="" />
                                </div>
                                <div className="focus-item__title">
                                    RESIDENTIAL PROPERTY
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="focus-item">
                                <div className="focus-item__icon">
                                    <img src="/static/img/icons/CP - icon.png" alt=""  />
                                </div>
                                <div className="focus-item__title">
                                COMMERCIAL PROPERTY
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="focus-item">
                                <div className="focus-item__icon">
                                    <img src="/static/img/icons/Invest icon.png" alt="" />
                                </div>
                                <div className="focus-item__title">
                                INVESTMENT PROPERTY
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="focus-item">
                                <div className="focus-item__icon">
                                    <img src="/static/img/icons/renovate icon.png" alt=""/>
                                </div>
                                <div className="focus-item__title">
                                RENOVATE AND FLIP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VendorAbout;
