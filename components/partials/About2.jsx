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
            className="ps-vendor-about-2 bg--cover"
        >
            <div className="ps-container">
                <div className="ps-section__content">
                    
                    <div className="image-top">
                        <img src="/static/img/icons/Image 17.png" alt="" width="100%" />
                    </div>
                    <div className="mt-70 mb-70 title-aboutus" >
                        Realising value throughout Adelaide, he added a long term investment to his Self-Managed Super Fund for only $165,000 which returns 9.5% per annum.
                    </div>
                    <div className="image-top mb-70">
                        <img src="/static/img/icons/Scroll Group 5.png" alt="" width="100%" />
                    </div>
                    <div className="mb-70 title-aboutus" >
                    It didn’t just stop there, Vinko decided to expand his reach into Commercial property with the purchase of two historic banks in booming South Australian country towns.
                    </div>
                    <div className="image-top mb-70">
                        <img src="/static/img/icons/Image 19.png" alt="" width="100%" />
                    </div>
                    <div className="mb-70 title-aboutus" >
                    The COVID pandemic bought a change in scenery with many relocating from metro SA into country towns for a change in lifestyle. Vinko identified this change and wanted to capture the demand that will arise.
                    </div>
                    <div className="image-top mb-70">
                        <img src="/static/img/icons/Scroll Group 2.png" alt="" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VendorAbout;
