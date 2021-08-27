import React, {useState, useEffect} from 'react';

const VendorAbout = () => {

    const [results, setResults] = useState({});
    const getServices = async () => {
        const res = await fetch('/api/services')
        const json = await res.json()
        setResults(json.data)
    }

    useEffect(() => {
        getServices()
    }, [])

    return (
        <div
        className="ps-vendor-banner bg--cover"
        style={{ backgroundImage: "url('/static/img/bg/71d0bfbcda5f2d01744e.jpg')" }}
    >
        <div className="ps-container">
            <div className="ps-section__header">
                <h4>
                    Our Services
                </h4>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 card-item">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                {/* <img src="/static/img/icons/vendor-1.png" alt="hmsp" /> */}
                                <i className="icon-home5 icon"></i>
                            </div>
                            <div className="ps-block__content">
                                <h4>PROPERTY BUYER’S AGENT</h4>
                                <p>
                                    {results.service_1}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 card-item">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <i className="icon-balance icon"></i>
                            </div>
                            <div className="ps-block__content">
                                <h4>VENDOR ADVOCACY</h4>
                                <p>
                                    {results.service_2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 card-item">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <i className="icon-trophy icon"></i>
                            </div>
                            <div className="ps-block__content">
                                <h4>PROPERTY MANAGEMENT</h4>
                                <p>
                                {results.service_3}
                                </p>
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
