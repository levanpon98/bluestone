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
            className="ps-vendor-testimonials bg--cover"
        >
            <div className="ps-container">
                <div className="ps-section__header">
                    <h4>
                        Testimonials
                    </h4>

                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-20 pl-20 mb-40">
                            <div className="ps-block--testimonials">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Mask Group 16.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">
                                    I was eager to purchase a few investment properties in Adelaide and as I'm based interstate, had no idea where to start. I contacted Vinko to assist in my search and gave him a specific description of the types of investments I was after. He was able to achieve my criteria despite the current competitive market in a very short period of time and was very successful in the negotiating to remain under my budget.
                                    </div>
                                    <div className="ps-block__content-bottom">
                                    Natalie
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-20 pl-20 mb-40">
                            <div className="ps-block--testimonials">
                                <div className="ps-block__thumbnail">
                                    <img src="/static/img/icons/Mask Group 17.png" alt="hmsp" />
                                </div>

                                <div className="ps-block__content">
                                    <div className="ps-block__content-top">
                                    I work a full-time professional job and I didn’t have the time to research and find strong yielding cash flow positive properties. I found Vinko online and after our initial meeting I could tell the passion he has in finding good deals in the market. He was professional, candid and I could always tell he wanted to find and secure the best property available for the right price and greatest upside. I am extremely pleased on the properties he has secured for me and I cannot recommend anybody else.
                                    </div>
                                    <div className="ps-block__content-bottom">
                                    Michael
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
