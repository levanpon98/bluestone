import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';

const HomeDefaultBanner = () => {
    const [bannerItems, setBannerItems] = useState(null);

    async function getBannerItems() {
        setBannerItems([
            { link: "1123", image: '/static/img/bg/adelaide-australia-south-australia-wallpaper-preview.jpg' },
            { link: "1123", image: '/static/img/bg/adelaide-convention-exhibition-centre-wallpaper-preview.jpg' },
        ])
    }

    useEffect(() => {
        getBannerItems();
    }, []);

    const carouselSetting = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Views
    let mainCarouselView;
    if (bannerItems) {
        const carouseItems = bannerItems.map((item) => (
            <div className="slide-item" key={item.id}>
                <Link href={`${item.link}`}>
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url(${item.image})`,
                        }}

                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carouseItems}
            </Slider>
        );
    }
    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container-homebanner">
                <div className="ps-section__left">
                    {mainCarouselView}
                    <div className="ps-section__left-content">
                        <h3>South Australian</h3>
                        <h2>BUYERS AGENTS</h2>
                        <button className="ps-btn">
                            Request A consultation
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeDefaultBanner;