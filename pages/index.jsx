import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import VendorBanner from '~/components/partials/VendorBanner';
import VendorAbout from '~/components/partials/VendorAbout';
import VendorMileStone from '~/components/partials/VendorMileStone';
import VendorBestFees from '~/components/partials/VendorBestFees';
import VendorTestimonials from '~/components/partials/VendorTestimonials';
import VendorFaqs from '~/components/partials/VendorFaqs';
import ContactForm from '~/components/partials/ContactForm';
import Services from '~/components/partials/Services'
import About from '~/components/partials/About'
import FooterContact from '~/components/partials/FooterContact'
import HomeBanner from "~/components/partials/HomeBanner"
const BecomeAVendorPage = () => {

    return (
        <ContainerPage title="Home Page" boxed={true}>
            <div className="ps-page--single">
                {/* <VendorBanner /> */}
                <div id="home">
                    <HomeBanner />
                </div>
                <div id="services">
                    <Services />
                </div>

                <div id="about-us">
                    <About />
                </div>

                {/* <VendorMileStone />
                <VendorBestFees />
                <VendorTestimonials />
                <VendorFaqs /> */}
                <VendorBanner />
                <FooterContact />
                {/* <ContactForm /> */}
            </div>
        </ContainerPage>
    );
};


export default BecomeAVendorPage;
