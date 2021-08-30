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
            className="ps-vendor-about bg--cover"
            style={{ backgroundImage: "url('/static/img/bg/Artboard13.png')" }}
        >
            <div className="ps-container">
                <div className="ps-section__header">
                    <h4>
                        About Us
                    </h4>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <div className="info-wrapper">
                                <div className="info-wrapper__cover">
                                    <div className="img-back">
                                        <img src="/static/img/users/18-3-1_2048x2048.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="info-wrapper__name">
                                    <h4>Vinko Juric</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__content">
                                <p>
                                    {results.aboutus}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VendorAbout;
