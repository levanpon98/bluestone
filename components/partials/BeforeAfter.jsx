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
            className="ps-vendor-beforeafter bg--cover"
        >
            <div className="ps-container">
                <div className="ps-section__header">
                    <h4>
                        Before and after
                    </h4>
                    <p>Most recently, Vinko completed two renovate and flip projects. These required a complete renovation of new kitchens, bathrooms, floors and painting.</p>
                </div>
                <div className="ps-section__content">
                    <div className="mt-70 mb-70 title" >
                        House One
                    </div>
                    <div className="row mb-30">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 246.png" alt="hmsp" width="100%" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 247.png" alt="hmsp" width="100%" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 248.png" alt="hmsp" width="100%" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 249.png" alt="hmsp" width="100%" />
                        </div>
                    </div>
                    <div className="mt-70 mb-70 title" >
                        House Two
                    </div>
                    <div className="row mb-30">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 258.png" alt="hmsp" width="100%" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 257.png" alt="hmsp" width="100%" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 260.png" alt="hmsp" width="100%" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <img src="/static/img/icons/Group 259.png" alt="hmsp" width="100%" />
                        </div>
                    </div>
                    <div className="mt-70 title-aboutus" >
                        With his active experience in the Adelaide property market as a buyer, he had many of his contacts reach out to him for advice and support. And after years of discussing it, he decided to take a leap and leave his corporate role as a General Manager to turn his passion into a full time job. He obtained his Diploma in Property (Agency Management) and now works to help his clients navigate the South Australian property market with tailored guidance and support.
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VendorAbout;
