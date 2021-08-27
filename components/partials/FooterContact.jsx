import React from 'react';
import Image from 'next/image'

const FooterContact = () => (
    <div
        className="ps-vendor-footer "
    >
        <div className="ps-container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <img src="/static/img/bg/vendor.jpg" className={'image'} />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 vendor-footer__left">
                    <div className="title">
                        <p>
                            Always Find The Property <br />You're Looking For
                        </p>
                    </div>
                    <div className="button">
                        <button className="ps-btn">
                            Request A consultation
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default FooterContact;
