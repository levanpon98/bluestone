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
        >
            <div className="ps-container">
                <div className="ps-section__header">
                    <h4>
                        About Us
                    </h4>
                </div>
                <div className="ps-section__content">
                    <div className="ps-block--aboutus">
                        <div className="ps-block__thumbnail">
                            <img src="/static/img/users/vinko.png" alt="Vinko Juric" />
                        </div>

                        <div className="ps-block__content">
                            <div className="ps-block__content-top">
                                <div className="title">
                                    Vinko Juric
                                </div>
                                <div className="position">
                                    Director
                                </div>
                            </div>
                            <div className="ps-block__content-bottom">
                                {results.aboutus}
                            </div>
                        </div>
                    </div>
                    <div className="mt-70 mb-70">
                        <img src="/static/img/icons/Scroll Group 4.png" alt="House six months" width="100%" />
                    </div>
                    <div className="mt-70 mb-70 title-aboutus" >
                        His love for the property market in SA continued to grow and six months later he purchased a rare 3-bedroom unit near the Flinders Medical University. This renter's dream became Vinko’s first renovation project and is now a modern furnished apartment returning $40k.
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VendorAbout;
