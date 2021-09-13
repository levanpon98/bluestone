import React, { useState, useEffect } from 'react';

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
            style={{ backgroundColor: "#051632"}}
        >
            <div className="ps-container">
                <div className="ps-section__header">
                    <h4>
                        Our Services
                    </h4>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pr-20 pl-20 card-item">
                            <div className="ps-block--icon-box-2">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Group 228.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">
                                        <div className="title">
                                            PROPERTY SEARCH
                                        </div>
                                    </div>
                                    <div className="ps-block__content-bottom">
                                        {results.service_1}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pr-20 pl-20 card-item">
                            <div className="ps-block--icon-box-2">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Group 226.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">
                                        <div className="title">
                                            CONTRACT
                                        </div>
                                    </div>
                                    <div className="ps-block__content-bottom">
                                        {results.service_2}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pr-20 pl-20 card-item">
                            <div className="ps-block--icon-box-2">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Group 230.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">

                                        <div className="title">
                                            FINANCE
                                        </div>
                                    </div>
                                    <div className="ps-block__content-bottom">
                                        {results.service_3}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pr-20 pl-20 card-item pb-0">
                            <div className="ps-block--icon-box-2">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Group 231.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">

                                        <div className="title">
                                        NEGOTIATE
                                        </div>
                                    </div>
                                    <div className="ps-block__content-bottom">
                                    Hate negotiating? Bluestone finds, negotiates and secures the property you want. We will always have your best interest at heart, so leave it to us to get you the best deal.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pr-20 pl-20 card-item pb-0">
                            <div className="ps-block--icon-box-2">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Group 227.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">

                                        <div className="title">
                                            AUCTION
                                        </div>
                                    </div>
                                    <div className="ps-block__content-bottom">
                                    Do you find auctions stressful? Take the stress and anxiety out of your purchase by having Bluestone attend the auction and bid on your behalf.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pr-20 pl-20 card-item pb-0">
                            <div className="ps-block--icon-box-2">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Group 229.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">

                                        <div className="title">
                                            CALCULATE THE COST
                                        </div>
                                    </div>
                                    <div className="ps-block__content-bottom">
                                    Bluestone will find properties that provide you with the opportunity to add significant returns by renovating and flipping for a profit. Let us do the numbers for you and tap into our network of tried and tested architects and tradesmen.
                                    </div>

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
